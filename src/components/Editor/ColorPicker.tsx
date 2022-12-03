import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import {BsArrowLeft, BsArrowRight, BsX} from "react-icons/bs";
import {ColorGroup} from "../../types/colors";
import {ColorPickerProps, ResumeThemeInterface} from "../../types/resume";
import IconButton from "./IconButton";

const allColors: ColorGroup[] = require("../../data/colors.json");

export default function ColorPicker({theme, setTheme, onClose}: ColorPickerProps) {

	const [currentSection, setCurrentSection] = useState(0);
	const [colors, setColors] = useState<ResumeThemeInterface>({
		bg: {
			name: "Background",
			value: theme?.bg?.value || "",
		},
		primary: {
			name: "Primary",
			value: theme?.primary?.value || "",
		},
		secondary: {
			name: "Secondary",
			value: theme?.secondary?.value || "",
		},
		tertiary: {
			name: "Tertiary",
			value: theme?.tertiary?.value || "",
		},
	});


	const max = Object.keys(colors).length - 1;
	const next = () => {
		if (currentSection < max) {
			setCurrentSection(currentSection + 1);
		}
	}
	const prev = () => {
		if (currentSection > 0) {
			setCurrentSection(currentSection - 1);
		}
	}

	return (
	  <>
		  <motion.div
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{duration: 0.2, ease: "easeInOut"}}
			className="absolute top-0 left-0 right-0 bottom-0 bg-neutral-900 bg-opacity-70 backdrop-blur-lg z-[9999] cursor-pointer"
			onClick={onClose}
		  />
		  <motion.div
			initial={{opacity: 0, scale: 0, translateY: "-50%", translateX: "-50%"}}
			animate={{opacity: 1, scale: 1, translateY: "-50%", translateX: "-50%"}}
			exit={{opacity: 0, scale: 0, translateY: "-50%", translateX: "-50%"}}
			transition={{duration: 0.5, ease: "easeInOut"}}
			className="w-3/5 max-h-[70vh] absolute-center flex flex-col bg-neutral-50 z-[99999] py-10 px-8 drop-shadow-md overflow-y-auto"
		  >
			  <header className="h-max flex items-center justify-between -my-2 -mx-4 px-4">
				  <h2 className="text-3xl text-neutral-900 font-bold">Customize</h2>
				  <IconButton Icon={BsX} onClick={onClose} title="Close"/>
			  </header>
			  <p className="text-sm opacity-50 font-normal mt-2">
				  Choose your preferred colors below to build a palette for your resume.
			  </p>

			  <div className="flex overflow-hidden">
				  {Object.keys(colors).map((color, index) => (
					<AnimatePresence key={index}>
						{index === currentSection &&
						  <motion.div
							initial={{opacity: 0.5}}
							animate={{opacity: 1}}
							exit={{opacity: 0}}
							transition={{duration: 0.2, ease: "easeInOut"}}
							className="min-w-full col-span-4 my-6"
						  >
							  <h4 className="w-max bg-neutral-200 text-sm rounded px-3 py-2">
								  {(colors as any)[color]["name"]}
							  </h4>
							  <div className="grid grid-cols-10 gap-3 mt-6">
								  {allColors.map((colorGroup, current) => (
									<div key={current} className="grid grid-cols-1 gap-3">
										{colorGroup.swatches.map((swatch, i) => (
										  <button key={i}>
											  <div
												style={{
													width: "100%",
													aspectRatio: "1/1",
													backgroundColor: swatch.color,
													borderRadius: "50%",
												}}
												className="hover:border-4 hover:border-neutral-900 cursor-pointer transition-all"
											  />
										  </button>
										))}
									</div>
								  ))}
							  </div>
						  </motion.div>}
					</AnimatePresence>
				  ))}
			  </div>

			  <div className="mt-auto flex justify-end items-center gap-4">
				  <NavButton Icon={BsArrowLeft} onClick={prev}/>
				  <NavButton Icon={BsArrowRight} onClick={next}/>
			  </div>
		  </motion.div>
	  </>
	)
}

function NavButton({Icon, onClick}: { Icon: any, onClick: () => void }) {
	return (
	  <button className="border border-neutral-600 text-neutral-600 hover:border-none hover:bg-neutral-600 hover:text-neutral-100 p-4 aspect-square rounded-full transition-all" onClick={onClick}>
		  <Icon size={18}/>
	  </button>
	)
}