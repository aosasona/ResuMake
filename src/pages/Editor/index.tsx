import {PDFViewer} from '@react-pdf/renderer';
import {ReactNode, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import CheckBox from "../../components/CheckBox";
import InputField from "../../components/InputField";
import Layout from "../../components/Layout";
import LogoutFAB from "../../components/LogoutFAB";
import Spinner from "../../components/Spinner";
import useAuth from "../../hooks/useAuth";
import useResumeData from "../../hooks/useResumeData";
import {ResumeData} from "../../types/resume";

const Editor = () => {
  const navigate = useNavigate();
  const {user} = useAuth();

  if (!user) {
	navigate("/auth");
  }

  const dimensions = {
	width: window.innerWidth * 0.5,
	height: window.innerHeight,
  }

  const {loading, data: currentResumeData, error} = useResumeData(user);
  const [changed, setChanged] = useState(false);
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
  // updateResumeData(data).then()
  // }, [data])

  const Template = data?.template ? require(`../../themes/${data.template}`).default : null;

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
		<section className="h-screen bg-neutral-50">
		  <div className="w-max mx-auto">
			<PDFViewer width={dimensions.width} height={dimensions.height} showToolbar={false}>
			  <Template data={data}/>
			</PDFViewer>
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