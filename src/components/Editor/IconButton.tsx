import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import {IconButtonsProps} from "../../types/editor";

export default function IconButton({Icon, disabled, title = "", onClick}: IconButtonsProps) {

  const [isHovered, setIsHovered] = useState(false);

  return (
	<AnimatePresence>
	  <button
		title={title}
		className="text-neutral-700 hover:bg-neutral-200 disabled:text-neutral-300 disabled:cursor-not-allowed p-3 hover:px-6 rounded transition-all"
		onClick={onClick}
		disabled={disabled}
		onMouseEnter={() => setIsHovered(true)}
		onMouseLeave={() => setIsHovered(false)}
	  >
		<div className="flex items-center gap-2 transition-all">
		  <Icon size={18}/>
		  {isHovered &&
            <motion.p
              initial={{x: 0, opacity: 0}}
              animate={{width: "auto", opacity: 1}}
              exit={{x: 0, opacity: 0}}
              className="inline-block text-sm">
			  {title}
            </motion.p>}
		</div>
	  </button>
	</AnimatePresence>
  )
}