import {AnimatePresence, motion} from "framer-motion";

export function AutoSavePopup({visible}: { visible: boolean }) {
  return (
	<AnimatePresence>
	  {visible &&
        <motion.div
          initial={{opacity: 0, scale: 0.8, transformOrigin: "bottom left"}}
          animate={{opacity: 1, scale: 1}}
          exit={{opacity: 0, scale: 0}}
          className="fixed bottom-0 left-0 z-50 w-max mx-4 mb-4"
        >
          <div className="flex items-center justify-between py-4 bg-darker rounded shadow-lg px-5">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-green-500"/>
              <p className="text-sm text-neutral-300">Saving...</p>
            </div>
          </div>
        </motion.div>}
	</AnimatePresence>
  )
}