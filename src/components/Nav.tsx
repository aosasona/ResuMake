import Logo from "../assets/logo.svg";

const Nav = () => {
  return (
	<nav className="w-screen fixed top-0 bg-neutral-50 py-8 lg:py-10 px-[4vw] z-[9999]">
	  <div className="flex items-center gap-2">
		<img src={Logo} alt="logo" className="w-7 lg:w-9 aspect-square"/>
		<p className="text-2xl lg:text-3xl text-darker font-bold">ResuMake</p>
	  </div>
	</nav>
  )
}

export default Nav