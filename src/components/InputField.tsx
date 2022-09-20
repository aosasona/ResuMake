import {AnimatePresence, motion} from "framer-motion";
import {ChangeEvent, FC, useState} from "react";
import {InputFieldProps} from "../types/form";

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

  if (!Object.keys(data).includes(name)) {
	throw new Error(`The data object does not contain the key - ${name}`);
  }

  return (
	<div className="w-full flex flex-col my-1 transition-all">
	  <AnimatePresence>
		{isFocused &&
          <motion.label
            initial={{opacity: 0, y: 10, scale: 0.8, transformOrigin: "bottom left"}}
            animate={{opacity: 1, y: 0, scale: 1}}
            exit={{opacity: 0, y: 10, scale: 0.8}}
            transition={{duration: 0.2, stiffness: 1000, transition: "easeInOut"}}
            htmlFor={name}
            className="text-primary text-xs font-medium"
          >
			{label}
          </motion.label>}
	  </AnimatePresence>
	  <input
		value={data[name]}
		type={type || "text"}
		placeholder={isFocused ? "" : placeholder || label}
		required={required}
		onChange={handleChange}
		onFocus={() => setIsFocused(true)}
		onBlur={() => setIsFocused(false)}
		className="text-base text-neutral-700 placeholder-neutral-400 focus:outline-none border border-neutral-400 focus:border-b-primary focus:border-x-0 focus:border-t-0 focus:py-3 focus:bg-transparent focus:px-0 px-4 py-4"
	  />
	</div>
  );
}

export default InputField;