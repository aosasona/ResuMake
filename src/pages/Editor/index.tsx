import {useState} from "react";
import Layout from "../../components/Layout";
import useAuth from "../../hooks/useAuth";
import {ResumeData} from "../../types/resume";

const Editor = () => {
  const {user} = useAuth();
  const [changed, setChanged] = useState(false);
  const [data, setData] = useState<ResumeData>({
	first_name: "",
	last_name: "",
	title: "",
	email: "",
	phone_number: "",
	cover_letter: "",
	skills: [],
	education_history: [],
	work_history: [],
	links: [],
	languages: [],
	address: {
	  line_1: "",
	  line_2: "",
	  city: "",
	  state: "",
	  country: "",
	  postal_code: "",
	},
  })
  return (
	<Layout title="Editor">
	  <main>
		<section></section>
		<section></section>
	  </main>
	</Layout>
  )
}

export default Editor