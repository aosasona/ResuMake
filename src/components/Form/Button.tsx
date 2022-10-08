import {FC} from "react";
import {ButtonProps} from "../../types/form";
import Spinner from "../Spinner";

const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  text = "Submit",
  bg = "bg-primary",
  px = 0,
  py = 5,
  color = "text-white",
  hoverColor = "hover:text-neutral-700",
  hoverBg = "hover:bg-neutral-200",
  loading,
  disabled,
  onClick,
}) => {
  return (
	<button
	  className={
		`${color} ${hoverBg} w-full text-sm text-center py-${py} px-${px} transition-all disabled:opacity-50 disabled:cursor-not-allowed `
		+ (loading ? "bg-neutral-200 hover:bg-neutral-100 cursor-not-allowed" : `${bg} ${hoverColor}`)
	  }
	  type={type}
	  onClick={onClick}
	  disabled={disabled}
	>
	  {loading ? <Spinner size={20}/> : children ? children : text}
	</button>
  );
}

export default Button;