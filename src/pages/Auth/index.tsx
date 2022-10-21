import { FormEvent, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import ErrorBox from "../../components/ErrorBox";
import Button from "../../components/Form/Button";
import InputField from "../../components/Form/InputField";
import Layout from "../../components/Layout";
import useAuth from "../../hooks/useAuth";
import {
	handleAuthSubmit,
	handleCreateAccount,
	handleGithubAuth,
	handleGoogleAuth,
} from "../../services/auth";
import { AuthDataState } from "../../types/auth";
import { handleError } from "../../utils/handler";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export default function Auth() {
	const navigate = useNavigate();
	const { user } = useAuth();

	if (user) {
		navigate("/editor");
	}

	const [status, setStatus] = useState({
		loading: false,
		error: false,
		message: "",
	});

	const [SignUp, setSignUp] = useState(true);

	const [data, setData] = useState<AuthDataState>({
		email: "",
		password: "",
	});

	const filterAndShowError = (error: unknown) => {
		const msg = handleError(error);
		setStatus({
			loading: false,
			error: true,
			message: msg,
		});
	};

	const handleEmailAuth = async (e: FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();
			setStatus({
				...status,
				loading: true,
			});
			await handleAuthSubmit(data);
			return;
		} catch (e: unknown) {
			filterAndShowError(e);
		}
	};

	// adejare
	const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();
			await handleCreateAccount(data);
		} catch (e: unknown) {
			filterAndShowError(e);
		}
	};

	const signInWithGithub = async () => {
		try {
			setStatus({
				...status,
				loading: true,
			});
			await handleGithubAuth();
		} catch (e: unknown) {
			filterAndShowError(e);
		}
	};

	const signInWithGoogle = async () => {
		try {
			setStatus({
				...status,
				loading: true,
			});
			await handleGoogleAuth();
		} catch (e: unknown) {
			filterAndShowError(e);
		}
	};

	return (
		<Layout title="Authenticate" allowMobile={true}>
			<div className="mt-[10vh]">
				<section className="w-[90vw] lg:w-2/6 2xl:w-1/5 bg-white px-8 lg:px-10 pt-8 pb-12 mx-auto transition-all">
					<Tabs>
						<div className="flex flex-col gap-6 items-center">
							<img
								src={Logo}
								alt="logo"
								className="w-10 aspect-square mx-auto mt-5"
							/>

							<TabList className="flex flex-row justify-center ">
								<Tab
									className="p-4 md:text-4xl text-2xl text-black  outline-0"
									disabledClassName="text-gray-400"
									selectedClassName="font-bold  border-black border-b-2"
									onSelect={() =>
										setSignUp(
											true
										)
									}
									onClick={() =>
										setSignUp(
											true
										)
									}
								>
									Sign Up
								</Tab>
								<Tab
									className="p-4 md:text-4xl text-2xl text-black outline-0 mr-10"
									disabledClassName="text-gray-400"
									selectedClassName="font-bold border-black outline-0 border-b-2"
									onClick={() =>
										setSignUp(
											false
										)
									}
								>
									Sign In
								</Tab>
							</TabList>

							{SignUp ? (
								<h4>
									No
									account?
									Create
									one to
									continue
								</h4>
							) : (
								<h4>
									Welcome,
									Sign in
									to
									continue
								</h4>
							)}
						</div>
						<TabPanel>
							<form
								onSubmit={
									handleSignUp
								}
								className="flex flex-col gap-3 mt-6 transition-all"
							>
								<ErrorBox
									status={
										status
									}
									setStatus={
										setStatus
									}
								/>
								<InputField
									name="email"
									type="email"
									data={
										data
									}
									label={
										"E-mail address"
									}
									onChange={
										setData
									}
								/>
								<div className="flex flex-col gap-2 mb-3">
									<InputField
										name="password"
										type="password"
										data={
											data
										}
										label={
											"Password"
										}
										onChange={
											setData
										}
									/>
								</div>
								<Button
									type="submit"
									loading={
										status.loading
									}
								>
									<div className="flex gap-2 items-center justify-center">
										<p>
											Sign
											Up
										</p>
										<BsArrowRight
											size={
												16
											}
										/>
									</div>
								</Button>
							</form>
						</TabPanel>
						<TabPanel>
							<form
								onSubmit={
									handleEmailAuth
								}
								className="flex flex-col gap-3 mt-6 transition-all"
							>
								<ErrorBox
									status={
										status
									}
									setStatus={
										setStatus
									}
								/>
								<InputField
									name="email"
									type="email"
									data={
										data
									}
									label={
										"E-mail address"
									}
									onChange={
										setData
									}
								/>
								<div className="flex flex-col gap-2 mb-3">
									<InputField
										name="password"
										type="password"
										data={
											data
										}
										label={
											"Password"
										}
										onChange={
											setData
										}
									/>
									<Link
										to="/forgot-password"
										className="text-primary text-sm font-medium self-end hover:opacity-60 "
									>
										Forgot
										password?
									</Link>
								</div>
								<Button
									type="submit"
									loading={
										status.loading
									}
								>
									<div className="flex gap-2 items-center justify-center">
										<p>
											Continue
										</p>
										<BsArrowRight
											size={
												16
											}
										/>
									</div>
								</Button>
							</form>
						</TabPanel>
						<div className="w-[95%] mx-auto relative h-[1px] bg-neutral-200 my-12">
							<p className=" bg-white text-neutral-400 absolute-center text-sm py-2 px-4">
								OR SIGN IN WITH
							</p>
						</div>
						<div className="flex gap-3">
							<Button
								bg="bg-neutral-100"
								color="text-neutral-500"
								hoverColor="hover:text-neutral-200"
								hoverBg="hover:bg-neutral-900"
								text="Google"
								type="button"
								onClick={
									signInWithGoogle
								}
							/>
							<Button
								bg="bg-neutral-900"
								hoverColor="hover:text-neutral-500"
								hoverBg="hover:bg-neutral-100"
								text="Github"
								type="button"
								onClick={
									signInWithGithub
								}
							/>
						</div>
					</Tabs>
				</section>
			</div>
		</Layout>
	);
}
