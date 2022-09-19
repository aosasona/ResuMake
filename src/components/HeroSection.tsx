import React, {useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import Typed from 'typed.js';
import HeroButton from "./HeroButton";

const HeroSection = () => {
  const navigate = useNavigate();
  const firstRef = useRef(null);
  const firstTypedRef = useRef<Typed>();
  const secondRef = useRef(null);
  const secondTypedRef = useRef<Typed>();

  const options = {
	typeSpeed: 100,
	fadeOut: true,
	showCursor: false,
	smartBackspace: false,
	loop: true,
	loopCount: Infinity,
  }

  useEffect(() => {
	firstTypedRef.current = new Typed(firstRef.current as any, {
	  strings: ["Easy.", "Free.", "Minimal."],
	  backDelay: 2500,
	  ...options,
	})
	secondTypedRef.current = new Typed(secondRef.current as any, {
	  strings: ["Customizable.", "Open Source.", "Extensible."],
	  backDelay: 5000,
	  ...options,
	})
	return () => {
	  firstTypedRef?.current?.destroy();
	  secondTypedRef?.current?.destroy();
	}
  }, [])


  return (
	<section
	  className="block grid grid-cols-1 lg:grid-cols-2 gap-2 min-h-screen bg-darker text-white pt-[16vh] lg:pt-0">
	  <div
		className="lg:flex lg:items-center h-full w-[86vw] lg:w-5/6 2xl:w-4/5 mx-auto">
		<div>
		  <HeaderText>
			<span ref={firstRef}/>
		  </HeaderText>
		  <HeaderText>
			<span ref={secondRef}/>
		  </HeaderText>
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
  <h1 className="block h-max text-5xl lg:text-[7rem] font-medium leading-tight">
	{children}
  </h1>
)

export default HeroSection