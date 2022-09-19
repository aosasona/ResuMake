import Logo from "../assets/logo.svg";

const Nav = () => {
  return (
	<nav className="w-screen bg-darker fixed top-0 py-11 lg:py-10 z-[9999]">
	  <div className="w-[86vw] lg:w-[88vw] mx-auto">
		<div className="flex items-center gap-2">
		  <img src={Logo} alt="logo" className="w-7 lg:w-9 aspect-square invert"/>
		  <p className="text-2xl lg:text-3xl text-white font-bold">ResuMake</p>
		</div>
	  </div>
	</nav>
  )
}

export default Nav