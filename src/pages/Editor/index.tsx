import {AnimatePresence} from "framer-motion";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AutoSavePopup} from "../../components/Editor/AutoSavePopup";
import ColorPicker from "../../components/Editor/ColorPicker";
import EditorToolbar from "../../components/Editor/EditorToolbar";
import ResumeEditor from "../../components/Editor/ResumeEditor";
import {SavingIndicator} from "../../components/Editor/SavingIndicator";
import ToolbarToggle from "../../components/Editor/ToolbarToggle";
import Layout from "../../components/Layout";
import LogoutFAB from "../../components/LogoutFAB";
import Spinner from "../../components/Spinner";
import useAuth from "../../hooks/useAuth";
import useResumeData from "../../hooks/useResumeData";
import {updateResumeData} from "../../services/resume";
import {ResumeData, ResumeThemeInterface} from "../../types/resume";

const lodash = require("lodash");

const Editor = () => {
  const navigate = useNavigate();
  const {user, loading: authLoading} = useAuth();

  useEffect(() => {
	if (!user && !authLoading) {
	  navigate("/auth");
	}
  }, [authLoading])

  const {loading, data: currentResumeData, error} = useResumeData(user);

  const [autoSavePopup, setAutoSavePopup] = useState(false);
  const [showToolbar, setShowToolbar] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formerResumeData, setFormerResumeData] = useState<ResumeData | null>(null);
  const [theme, setTheme] = useState<ResumeThemeInterface>({
	bg: {
	  name: "",
	  value: "",
	},
	primary: {
	  name: "",
	  value: "",
	},
	secondary: {
	  name: "",
	  value: "",
	},
	tertiary: {
	  name: "",
	  value: "",
	},
  })
  const [data, setData] = useState<ResumeData>(currentResumeData || {
	id: user?.id || "",
	first_name: "",
	last_name: "",
	title: "",
	email: user?.email || "",
	phone_number: "",
	cover_letter: "",
	skills: null,
	education_history: [],
	work_history: [],
	links: [],
	languages: [],
	address: {city: "", state: ""},
	template: "Mono",
	show_email: true,
  })

  useEffect(() => {
	const handleKeyDown = (e: KeyboardEvent) => {
	  if ((e.ctrlKey || e.metaKey) && e.key?.toLowerCase() === "s") {
		e.preventDefault();
		handleSave();
	  }
	}
	document.addEventListener("keydown", handleKeyDown);
	return () => {
	  document.removeEventListener("keydown", handleKeyDown);
	}
  }, [])

  useEffect(() => {
	setData({
	  ...data,
	  email: user?.email || "",
	  id: user?.id || "",
	})
  }, [user])

  useEffect(() => {
	if (currentResumeData) {
	  setData(currentResumeData);
	  setFormerResumeData(currentResumeData);
	}
  }, [currentResumeData])

  useEffect(() => {
	const timeout = setTimeout(() => {
	  setAutoSavePopup(false);
	}, 3000)

	return () => {
	  clearTimeout(timeout);
	}
  }, [autoSavePopup])

  useEffect(() => {
	const timeout = setTimeout(() => {
	  if (formerResumeData && !lodash.isEqual(formerResumeData, data) && !saving && user) {
		setAutoSavePopup(true);
		handleSave()
		setFormerResumeData(data);
	  }
	}, 1500)

	return () => {
	  clearTimeout(timeout);
	}
  }, [data, user])

  function handleSave() {
	if (user) {
	  setSaving(true);
	  updateResumeData({data, userId: user?.id as string})
		.then()
		.catch(console.log)
		.finally(() => setSaving(false));
	}
  }

  const Template = data?.template ? require(`../../themes/${data.template}`).default : require(`../../themes/Mono`).default;

  if (loading) {
	return (
	  <Layout title="Editor">
		<main className="flex w-screen h-screen items-center justify-center">
		  <Spinner size={30}/>
		</main>
	  </Layout>
	)
  }

  return (
	<Layout title="Editor">
	  {saving && <SavingIndicator/>}
	  <AutoSavePopup visible={autoSavePopup}/>
	  <main className="max-w-screen max-h-screen h-screen grid grid-cols-2 overflow-hidden">
		<section className=" h-screen mx-auto overflow-y-scroll hide-scrollbar">
		  <div className="w-[86%] mx-auto py-[5vh]">
			<ResumeEditor data={data} setData={setData}/>
		  </div>
		</section>
		<section className="h-screen relative bg-neutral-50">
		  <div className="absolute top-0 left-0 right-0 flex justify-between py-3 px-3">
			<ToolbarToggle visible={showToolbar} onClick={() => setShowToolbar(!showToolbar)}/>
			<LogoutFAB/>
		  </div>
		  <div className="w-full h-full max-h-screen flex items-center justify-center">
			<div className="max-h-[92vh] aspect-[1/1.414]">
			  <Template data={data} theme={theme}/>
			</div>
		  </div>
		  <AnimatePresence>
			{showToolbar &&
              <EditorToolbar
                data={data}
                theme={theme}
                showToolbar={showToolbar}
                showColorPicker={showColorPicker}
                currentResumeData={formerResumeData || {} as ResumeData}
                setShowColorPicker={setShowColorPicker}
                setShowToolbar={setShowToolbar}
                setTheme={setTheme}
                handleSave={handleSave}
              />}
		  </AnimatePresence>
		  <AnimatePresence>
			{showColorPicker && <ColorPicker theme={theme} setTheme={setTheme} onClose={() => setShowColorPicker(false)}/>}
		  </AnimatePresence>
		</section>
	  </main>
	</Layout>
  )
}


export default Editor