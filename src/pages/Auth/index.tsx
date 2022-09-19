import {FormEvent, useState} from "react";
import {BsArrowRight} from "react-icons/bs";
import {Link} from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Button from "../../components/Button";
import ErrorBox from "../../components/ErrorBox";
import InputField from "../../components/InputField";
import Layout from "../../components/Layout";
import {handleAuthSubmit} from "../../services/auth";
import {AuthDataState} from "../../types/auth";
import {handleError} from "../../utils/handler";

export default function Auth() {

  const [status, setStatus] = useState({
	loading: false,
	error: false,
	message: "",
  })
  const [data, setData] = useState<AuthDataState>({
	email: "",
	password: "",
  })


  const handleEmailAuth = async (e: FormEvent<HTMLFormElement>) => {
	try {
	  e.preventDefault();
	  setStatus({
		...status,
		loading: true,
	  })
	  await handleAuthSubmit(data)
	  return
	}
	catch (e: unknown) {
	  const msg = handleError(e)
	  setStatus({
		loading: false,
		error: true,
		message: msg,
	  })
	}
  }

  return (
	<Layout title="Authenticate" allowMobile={true}>
	  <div className="mt-[10vh]">
		<section className="w-[88vw] lg:w-2/6 2xl:w-1/5 bg-white px-8 lg:px-10 pt-8 pb-12 mx-auto transition-all">
		  <div className="flex flex-col gap-6 items-center">
			<img src={Logo} alt="logo" className="w-10 aspect-square mx-auto mt-5"/>
			<h4 className="w-5/6 mx-auto text-sm text-neutral-500 text-center">
			  Sign in or create a new account to continue
			</h4>
		  </div>
		  <form onSubmit={handleEmailAuth} className="flex flex-col gap-3 mt-6 transition-all">
			<ErrorBox status={status} setStatus={setStatus}/>
			<InputField name="email" type="email" data={data} label={"E-mail address"} onChange={setData}/>
			<div className="flex flex-col gap-2 mb-3">
			  <InputField name="password" type="password" data={data} label={"Password"} onChange={setData}/>
			  <Link to="/forgot-password" className="text-primary text-sm font-medium self-end hover:opacity-60 ">
				Forgot password?
			  </Link>
			</div>
			<Button type="submit" loading={status.loading}>
			  <div className="flex gap-2 items-center justify-center">
				<p>Continue</p>
				<BsArrowRight size={16}/>
			  </div>
			</Button>
		  </form>
		  <div className="w-[95%] mx-auto relative h-[1px] bg-neutral-200 my-12">
			<p className=" bg-white text-neutral-400 absolute-center text-sm py-2 px-4">OR SIGN IN WITH</p>
		  </div>
		  <div className="flex gap-3">
			<Button
			  bg="bg-neutral-100"
			  color="text-neutral-500"
			  hoverColor="hover:text-neutral-200"
			  hoverBg="hover:bg-neutral-900"
			  text="Google"
			  type="button"
			/>
			<Button
			  bg="bg-neutral-900"
			  hoverColor="hover:text-neutral-500"
			  hoverBg="hover:bg-neutral-100"
			  text="Github"
			  type="button"
			/>
		  </div>
		</section>
	  </div>
	</Layout>
  )
}