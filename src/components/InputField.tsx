import {ChangeEvent, FC, useState} from "react";
import {InputFieldProps} from "../types/input";

const InputField: FC<InputFieldProps> = ({
  name,
  label,
  placeholder,
  type,
  data,
  required = true,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
	onChange({
	  ...data,
	  [name]: event?.target?.value,
	})
  };
  return (
	<div>
	  <label htmlFor={name} className={isFocused ? "text-primary" : "text-indigo-200"}>{label}</label>
	  <input
		value={data[name]}
		type={type}
		placeholder={placeholder}
		required={required}
		onChange={handleChange}
		onFocus={() => setIsFocused(true)}
		onBlur={() => setIsFocused(false)}
	  />
	</div>
  );
}