import {FC} from "react";
import {ButtonProps} from "../types/form";
import Spinner from "./Spinner";

const Button: FC<ButtonProps> = ({
  type = "button",
  text = "Submit",
  className,
  loading,
  disabled,
  onClick,
}) => {
  return (
	<button
	  className={className ||
		"bg-primary text-center text-white py-6 hover:bg-dark transition-all disabled:opacity-50"
		+ " disabled:cursor-not-allowed"
		+ (loading ? " bg-opacity-5 cursor-not-allowed" : "")}
	  type={type}
	  onClick={onClick}
	  disabled={disabled}
	>
	  {loading ? <Spinner size={20}/> : text}
	</button>
  );
}

export default Button;