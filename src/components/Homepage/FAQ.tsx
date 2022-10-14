import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import {BsChevronDown, BsChevronUp} from "react-icons/bs";
import {FAQProps} from "../../types/home";

export default function FAQ({question, children}: FAQProps) {
  const [open, setOpen] = useState(false);
  return (
	<div className="border-b border-b-neutral-200 py-6 px-2 transition-all">
	  <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(!open)}>
		<h2 className="text-xl font-bold">{question}</h2>
		<div className="px-2">
		  {!open ? <BsChevronDown/> : <BsChevronUp/>}
		</div>
	  </div>
	  <AnimatePresence>
		{open &&
          <motion.p
            initial={{y: -20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -10}}
            transition={{duration: 0.2}}
            className="text-sm text-neutral-500 font-normal mt-3"
          >
			{children}
          </motion.p>
		}
	  </AnimatePresence>
	</div>
  )
}