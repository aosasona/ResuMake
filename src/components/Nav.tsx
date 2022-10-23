import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Logo from "../assets/logo.svg";

const Nav = () => {

	const navigate = useNavigate();

	const [showSignInButton, setShowSignInButton] = useState(false);

	useEffect(() => {
		const triggerHeight = window.innerHeight * 0.8;
		window.addEventListener("scroll", () => {
			if (window.scrollY > triggerHeight) {
				setShowSignInButton(true);
			} else {
				setShowSignInButton(false);
			}
		})

		return () => {
			window.removeEventListener("scroll", () => {
				if (window.scrollY > triggerHeight) {
					setShowSignInButton(false);
				} else {
					setShowSignInButton(true);
				}
			})
		}
	}, [])

	return (
	  <nav className="w-screen bg-darker fixed top-0 py-10 lg:py-10 z-[9999]">
		  <div className="w-[86vw] lg:w-[88vw] flex items-center justify-between mx-auto">
			  <div className="flex items-center gap-2">
				  <img src={Logo} alt="logo" className="w-7 lg:w-9 aspect-square invert"/>
				  <p className="text-2xl lg:text-3xl poppins text-white font-bold">Resumake</p>
			  </div>

			  <AnimatePresence>
				  {showSignInButton && (
					<motion.button
					  initial={{opacity: 0, y: -10}}
					  animate={{opacity: 1, y: 0}}
					  exit={{opacity: 0, y: -10}}
					  transition={{duration: 0.2}}
					  className="bg-white text-darker text-sm rounded-3xl hover:bg-neutral-200 transition-all px-4 py-2"
					  onClick={() => navigate("auth")}>
						Get Started
					</motion.button>
				  )}
			  </AnimatePresence>
		  </div>
	  </nav>
	)
}

export default Nav