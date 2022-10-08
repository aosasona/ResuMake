import React from "react";
import Select from "react-select";
import {SelectorProps} from "../../types/form";

export default function Selector({name, value, options, placeholder, onChange}: SelectorProps) {
  return (
	<Select
	  name={name}
	  defaultValue={value}
	  options={options as any}
	  value={value}
	  onChange={onChange}
	  placeholder={placeholder}
	  theme={(theme) => ({
		...theme,
		borderRadius: 0,
		colors: {
		  ...theme.colors,
		  primary: '#000',
		  primary25: '#D5D5D5',
		},
	  })}
	  styles={{
		control: (provided) => ({
		  ...provided,
		  paddingBlock: '0.4rem',
		  marginBlock: '0.2rem',
		}),
	  }}
	/>
  )
}