import {FC} from "react";
import {ButtonProps} from "../types/form";
import Spinner from "./Spinner";

const Button: FC<ButtonProps> = ({
  type = "button",
  text = "Submit",
  bg = "bg-primary",
  color = "text-white",
  hoverColor = "hover:text-white",
  loading,
  disabled,
  onClick,
}) => {
  return (
	<button
	  className={
		`${bg} ${color} ${hoverColor} w-full text-center py-5 hover:bg-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed`
		+ (loading ? " bg-opacity-5 cursor-not-allowed" : "")
	  }
	  type={type}
	  onClick={onClick}
	  disabled={disabled}
	>
	  {loading ? <Spinner size={20}/> : text}
	</button>
  );
}

export default Button;