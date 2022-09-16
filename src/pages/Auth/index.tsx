import {FormEvent, useState} from "react";
import InputField from "../../components/InputField";
import Layout from "../../components/Layout";
import {handleFormSubmit} from "../../services/auth";

export default function Auth() {

  const [data, setData] = useState({
	email: "",
	password: "",
  })

  const handleChange = (e: any) => {
	setData({
	  ...data,
	  [e.target.name]: e.target.value,
	})
  }

  const handleEmailAuth = (e: FormEvent<HTMLFormElement>) => {
	try {
	  handleFormSubmit(data);
	}
	catch (e: unknown) {
	  console.log(e);
	}
  }

  return (
	<Layout title={"Authentication"}>
	  <div className="mt-[10vh]">
		<section className="lg:w-2/6 2xl:w-1/5 bg-white px-10 py-16 mx-auto transition-all">
		  <h1 className="text-5xl font-bold text-neutral-700">Welcome</h1>
		  <p className="mt-2 text-sm text-neutral-500 px-1">
			Use any of the authentication methods below to sign-in or create an account
		  </p>
		  <form onSubmit={handleEmailAuth} className="flex flex-col gap-2 mt-8 transition-all">
			<InputField name="email" type="email" data={data} label={"E-mail address"} onChange={setData}/>
			<InputField name="password" type="password" data={data} label={"Password"} onChange={setData}/>
		  </form>
		</section>
	  </div>
	</Layout>
  )
}