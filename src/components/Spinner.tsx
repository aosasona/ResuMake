import {FC} from "react";
import {SpinnerProps} from "../types/form";

const Spinner: FC<SpinnerProps> = ({size = 70}) => {
  return (
	<div className="flex items-center justify-center">
	  <div style={{width: `${size}px`}} className="spinner"/>
	</div>
  )
}

export default Spinner