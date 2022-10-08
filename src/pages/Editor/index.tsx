import {AnimatePresence} from "framer-motion";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
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

const Editor = () => {
  const navigate = useNavigate();
  const {user, loading: authLoading} = useAuth();

  useEffect(() => {
	if (!user && !authLoading) {
	  navigate("/auth");
	}
  }, [authLoading])

  const {loading, data: currentResumeData, error} = useResumeData(user);

  const [showToolbar, setShowToolbar] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [saving, setSaving] = useState(false);
  const [theme, setTheme] = useState<ResumeThemeInterface>({
	bg: "",
	colors: {
	  primary: "",
	  secondary: "",
	  tertiary: "",
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
	education_history: null,
	work_history: null,
	links: null,
	languages: null,
	address: {city: "", state: ""},
	template: "Mono",
	show_email: true,
  })

  useEffect(() => {
	setData({
	  ...data,
	  email: user?.email || "",
	  id: user?.id || "",
	})
	return
  }, [user])

  useEffect(() => {
	if (currentResumeData) {
	  setData(currentResumeData);
	}
	return
  }, [currentResumeData])

  // useEffect(() => {
  // if (JSON.stringify(data) !== JSON.stringify(currentResumeData) && !loading) {
  //   setSaving(true);
  //   updateResumeData(data).then().finally(() => setSaving(false));
  // }
  // }, [data])

  function handleSave() {
	setSaving(true);
	updateResumeData({data, userId: user?.id as string}).then().finally(() => setSaving(false));
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
	  <main className="max-w-screen max-h-screen h-screen grid grid-cols-2 overflow-hidden">
		<section className="w-[86%] h-screen mx-auto overflow-y-scroll pt-[5vh]">
		  <ResumeEditor data={data} setData={setData}/>
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
                currentResumeData={currentResumeData || {} as ResumeData}
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