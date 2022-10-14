import {HiOutlineMenu} from "react-icons/hi";
import {ToolbarToggleProps} from "../../types/resume";

export default function ToolbarToggle({visible, onClick}: ToolbarToggleProps) {
  return (
	<button
	  onClick={onClick}
	  className="bg-white hover:bg-neutral-100 text-neutral-500 drop-shadow rounded-3xl transition-all"
	>
	  <div className="flex gap-1 items-center justify-center px-5 py-3">
		<HiOutlineMenu size={16}/>
		<p className="text-sm">Menu</p>
	  </div>
	</button>
  )
}