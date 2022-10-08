import {motion} from "framer-motion";
import {BsX} from "react-icons/bs";
import {ColorPickerProps} from "../../types/resume";
import IconButton from "./IconButton";

export default function ColorPicker({theme, setTheme, onClose}: ColorPickerProps) {

  const colors = {
	bg: {
	  name: "Background",
	},
	primary: {
	  name: "Primary",
	},
	secondary: {
	  name: "Secondary",
	},
	tertiary: {
	  name: "Tertiary",
	  colors: [],
	},
  }

  return (
	<>
	  <motion.div
		initial={{opacity: 0}}
		animate={{opacity: 1}}
		exit={{opacity: 0}}
		transition={{duration: 0.1, ease: "easeInOut"}}
		className="absolute top-0 left-0 right-0 bottom-0 bg-neutral-900 bg-opacity-70 backdrop-blur-lg z-[9999] cursor-pointer"
		onClick={onClose}
	  />
	  <motion.div
		initial={{opacity: 0, scaleY: 0, translateY: "-50%", translateX: "-50%"}}
		animate={{opacity: 1, scaleY: 1, translateY: "-50%", translateX: "-50%"}}
		exit={{opacity: 0, scaleY: 0, translateY: "-50%", translateX: "-50%"}}
		transition={{duration: 0.2, type: "spring", stiffness: 60, damping: 10}}
		className="w-3/5 absolute-center bg-neutral-50 z-[99999] py-4 px-6 drop-shadow-md"
	  >
		<header className="h-max flex items-center justify-between -my-2 -mx-4">
		  <h2 className="text-3xl text-neutral-900 font-bold">Customize</h2>
		  <IconButton Icon={BsX} onClick={onClose} title="Close"/>
		</header>
		<p className="text-sm opacity-50 font-normal">Choose your preferred colors below to build a palette for your resume.</p>
	  </motion.div>
	</>
  )
}