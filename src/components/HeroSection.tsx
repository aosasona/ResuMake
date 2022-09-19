import React from "react";
import {useNavigate} from "react-router-dom";
import TextLoop from "react-text-loop";
import HeroButton from "./HeroButton";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
	<section
	  className="block grid grid-cols-1 lg:grid-cols-2 gap-2 min-h-screen bg-darker text-white pt-[16vh] lg:pt-0">
	  <div
		className="lg:flex lg:items-center h-full w-[86vw] lg:w-5/6 2xl:w-4/5 mx-auto">
		<div>
		  <TextLoop interval={2500}>
			<HeaderText>Easy.</HeaderText>
			<HeaderText>Free.</HeaderText>
			<HeaderText>Minimal.</HeaderText>
		  </TextLoop>
		  <br/>
		  <TextLoop interval={7500}>
			<HeaderText>Customizable.</HeaderText>
			<HeaderText>Open-Source.</HeaderText>
			<HeaderText>Extensible.</HeaderText>
		  </TextLoop>
		  <p className="lg:w-5/6 text-base lg:text-lg text-neutral-400 font-medium my-8">
			With a simple, easy-to-use user interface, you can make a great resume in a matter of minutes. Customize and expand templates to
			fit your needs, or even better, <b>code</b> your own templates.
		  </p>
		  <div className="lg:w-4/5">
			<HeroButton
			  bg="bg-neutral-100"
			  color="text-darker"
			  hoverColor="hover:text-neutral-200"
			  hoverBg="hover:bg-neutral-800"
			  onClick={() => navigate("auth")}
			>
			  Get Started
			</HeroButton>
		  </div>
		</div>
	  </div>
	</section>
  )
}

const HeaderText = ({children}: { children: React.ReactNode }) => (
  <h1 className="block h-max text-5xl lg:text-[7rem] font-bold leading-tight">
	{children}
  </h1>
)

export default HeroSection