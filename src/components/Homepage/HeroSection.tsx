import React from "react";
import {useNavigate} from "react-router-dom";
import TextLoop from "react-text-loop";
import HeroImage from "../../assets/hero.png"
import HeroButton from "./HeroButton";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
	<section
	  className="relative block grid grid-cols-1 lg:grid-cols-2 lg:gap-2 min-h-screen bg-darker text-white pt-[15vh] lg:pt-0 overflow-hidden">
	  <div
		className="lg:flex lg:items-center h-full w-[88vw] lg:w-5/6 2xl:w-4/5 mx-auto">
		<div>
		  <div className="flex flex-col gap-3">
			<TextLoop interval={2500}>
			  <HeaderText>Easy.</HeaderText>
			  <HeaderText>Free.</HeaderText>
			  <HeaderText>Minimal.</HeaderText>
			</TextLoop>
			<TextLoop interval={8000}>
			  <HeaderText>Customizable.</HeaderText>
			  <HeaderText>Open-Source.</HeaderText>
			  <HeaderText>Extensible.</HeaderText>
			</TextLoop>
		  </div>
		  <p className="lg:w-5/6 text-base lg:text-lg text-neutral-500 font-normal my-8">
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
	  <div className="w-full absolute lg:static lg:flex lg:justify-center lg:items-start lg:items-center -bottom-32 left-0">
		<img src={HeroImage} alt="hero" className="w-[88vw] lg:w-4/6 lg:aspect-square mx-auto"/>
	  </div>
	</section>
  )
}

const HeaderText = ({children}: { children: React.ReactNode }) => (
  <h1 className="block text-5xl md:text-[5rem] lg:text-[6rem] font-bold my-1 lg:my-1">
	{children}
  </h1>
)

export default HeroSection