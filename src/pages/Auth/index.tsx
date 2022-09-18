import {FormEvent, useState} from "react";
import {Link} from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import Layout from "../../components/Layout";
import {handleAuthSubmit} from "../../services/auth";
import {AuthActionsEnum, AuthDataState} from "../../types/auth";

export default function Auth() {

  const [formAction, setFormAction] = useState<AuthActionsEnum>(AuthActionsEnum.LOGIN);
  const [data, setData] = useState<AuthDataState>({
	email: "",
	password: "",
  })

  const handleActionChange = () => {
	if (formAction === AuthActionsEnum.LOGIN) {
	  setFormAction(AuthActionsEnum.REGISTER)
	} else {
	  setFormAction(AuthActionsEnum.LOGIN)
	}
	return
  }

  const handleEmailAuth = (e: FormEvent<HTMLFormElement>) => {
	e.preventDefault();
	try {
	  handleAuthSubmit(data)
	  return
	}
	catch (e: unknown) {
	  console.log(e);
	}
  }

  return (
	<Layout title="Authenticate">
	  <div className="mt-[10vh]">
		<section className="lg:w-2/6 2xl:w-1/5 bg-white px-10 pt-6 pb-12 mx-auto transition-all">
		  <div className="flex flex-col gap-6 items-center">
			<img src={Logo} alt="logo" className="w-10 aspect-square mx-auto mt-5"/>
			<h4 className="text-sm text-neutral-500">
			  {formAction === AuthActionsEnum.LOGIN ? "Sign in to your account" : "Create an account"}
			</h4>
		  </div>
		  <form onSubmit={handleEmailAuth} className="flex flex-col gap-3 mt-6 transition-all">
			<InputField name="email" type="email" data={data} label={"E-mail address"} onChange={setData}/>
			<div className="flex flex-col gap-1 mb-3">
			  <InputField name="password" type="password" data={data} label={"Password"} onChange={setData}/>
			  <Link to="/forgot-password" className="text-primary text-sm font-medium hover:opacity-60 ">
				Forgot password?
			  </Link>
			</div>
			<Button text="Continue" type="submit"/>
		  </form>
		  <button onClick={handleActionChange} className="w-full text-center text-primary hover:opacity-60 text-sm py-5 transition-all">
			{formAction === AuthActionsEnum.LOGIN ? "Create an account" : "Sign in to your account"}
		  </button>
		  <div className="w-full relative h-[1px] bg-neutral-200 mt-6">
			<p className=" bg-white text-neutral-400 absolute-center text-sm py-2 px-4">OR SIGN IN WITH</p>
		  </div>
		  <div className="flex gap-3 mt-10">
			<Button
			  bg="bg-neutral-100"
			  color="text-neutral-500"
			  hoverColor="hover:text-white"
			  text="Google"
			  type="button"
			/>
			<Button
			  bg="bg-neutral-700"
			  text="Github"
			  type="button"
			/>
		  </div>
		</section>
	  </div>
	</Layout>
  )
}