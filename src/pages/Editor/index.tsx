import {ReactNode, useEffect, useState} from "react";
import {FiSave} from "react-icons/fi";
import {useNavigate} from "react-router-dom";
import CheckBox from "../../components/CheckBox";
import IconButton from "../../components/Editor/IconButton";
import {SavingIndicator} from "../../components/Editor/SavingIndicator";
import InputField from "../../components/InputField";
import Layout from "../../components/Layout";
import LogoutFAB from "../../components/LogoutFAB";
import Spinner from "../../components/Spinner";
import useAuth from "../../hooks/useAuth";
import useResumeData from "../../hooks/useResumeData";
import {updateResumeData} from "../../services/resume";
import {ResumeData} from "../../types/resume";

const Editor = () => {
  const navigate = useNavigate();
  const {user, loading: authLoading} = useAuth();

  useEffect(() => {
	if (!user && !authLoading) {
	  navigate("/auth");
	}
  }, [authLoading])

  const dimensions = {
	width: window.innerWidth * 0.5,
	height: window.innerHeight,
  }

  const {loading, data: currentResumeData, error} = useResumeData(user);
  const [saving, setSaving] = useState(false);
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
	address: null,
	template: "Mono",
	show_email: true,
  })

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
	}
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
	  <main className="max-w-screen max-h-screen grid grid-cols-2">
		<section className="w-[86%] h-screen mx-auto overflow-y-scroll pt-[5vh]">
		  <SectionHeader>Personal details</SectionHeader>
		  <div className="w-full grid grid-cols-2 gap-4">
			<InputField name="first_name" data={data} label="First name" onChange={setData}/>
			<InputField name="last_name" data={data} label="Last name" onChange={setData}/>
			<InputField name="title" data={data} label="Professional title" onChange={setData}/>
			<InputField type="tel" name="phone_number" data={data} label="Phone number" onChange={setData}/>
			<CheckBox name="show_email" label="Display E-mail on resume" data={data} onChange={setData}/>
		  </div>
		</section>
		<section className="h-screen relative bg-neutral-50">
		  <div className="w-full h-full max-h-screen overflow-y-auto pr-[6vw]">
			<Template data={data}/>
		  </div>
		  <div
			className="w-[5vw] max-w-[75px] flex flex-col justify-evenly items-center absolute h-screen top-0 bottom-0 right-0 bg-neutral-100 drop-shadow-lg">
			{/* TOOLS GO HERE */}

			<IconButton
			  Icon={FiSave}
			  title="Save" disabled={JSON.stringify(data) === JSON.stringify(currentResumeData)}
			  onClick={handleSave}
			/>
		  </div>
		</section>
	  </main>
	  <LogoutFAB/>
	</Layout>
  )
}

const SectionHeader = ({children}: { children: ReactNode }) => (
  <>
	<h2 className="text-xl font-bold">{children}</h2>
	<hr className="text-neutral-700 my-4"/>
  </>
)

export default Editor