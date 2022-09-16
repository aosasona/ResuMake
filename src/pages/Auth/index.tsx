import {FormEvent, useState} from "react";
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
		<section className="lg:w-2/6 2xl:w-1/5 bg-indigo-100 px-10 py-10 mx-auto">
		  <h1 className="text-5xl text-neutral-700">Sign-In</h1>
		  <p className="mt-4 text-sm text-neutral-400">
			Use any of the authentication methods below to sign-in or create an account
		  </p>
		  <form onSubmit={handleEmailAuth} className="mt-8">
			Hqllo
		  </form>
		</section>
	  </div>
	</Layout>
  )
}