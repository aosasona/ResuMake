import {motion} from "framer-motion";
import {BsDownload, BsPaintBucket, BsX} from "react-icons/bs";
import {FiSave} from "react-icons/fi";
import {ResumeToolBarProps} from "../../types/resume";
import IconButton from "./IconButton";

export default function EditorToolbar({
  data,
  theme,
  showToolbar,
  showColorPicker,
  currentResumeData,
  setShowColorPicker,
  setShowToolbar,
  setTheme,
  handleSave,
}: ResumeToolBarProps) {
  return (
	<motion.div
	  initial={{y: -75}}
	  animate={{y: 0}}
	  exit={{y: -75}}
	  transition={{duration: 0.2}}
	  className="w-full h-auto flex justify-start items-center gap-5 absolute top-0 left-0 right-0 bg-neutral-100 py-4 px-5 z-[999]"
	>
	  <IconButton
		title="Close"
		Icon={BsX}
		onClick={() => setShowToolbar(!showToolbar)}
	  />
	  <IconButton
		title="Save"
		Icon={FiSave}
		disabled={JSON.stringify(data) === JSON.stringify(currentResumeData)}
		onClick={handleSave}
	  />
	  <IconButton
		title="Customize Theme"
		Icon={BsPaintBucket}
		onClick={() => setShowColorPicker(!showColorPicker)}
	  />
	  <IconButton
		title="Download"
		Icon={BsDownload}
		onClick={() => console.log("Download")}
	  />
	</motion.div>
  )
}