import {IconButtonsProps} from "../../types/editor";

export default function IconButton({Icon, disabled, title = "", onClick}: IconButtonsProps) {
  return (
	<button
	  className="hover:bg-neutral-200 hover:scale-95 disabled:text-neutral-300 disabled:cursor-not-allowed p-3 rounded transition-all"
	  onClick={onClick}
	  disabled={disabled}
	>
	  <Icon size={24}/>
	</button>
  )
}