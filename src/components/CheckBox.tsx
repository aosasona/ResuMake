import {FC} from "react";
import {CheckBoxProps} from "../types/form";

const CheckBox: FC<CheckBoxProps> = ({name, label, data, onChange}) => {

  const handleChange = (val: boolean) => {
	onChange({
	  ...data,
	  [name]: val,
	})
  }

  const property = data[name];

  return (
	<div className="flex items-center gap-2">
	  <input
		type="checkbox"
		className="hidden"
		checked={property}
		onChange={() => handleChange(!property)}
	  />
	  <label
		title="Click to toggle"
		className={"w-[14px] aspect-square cursor-pointer " + (property ? "bg-neutral-900" : "bg-neutral-300")}
		onClick={() => handleChange(!property)}/>
	  <p>{label}</p>
	</div>
  )
}

export default CheckBox;