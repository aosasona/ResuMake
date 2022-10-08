import {BsPower} from "react-icons/bs";
import {handleAuthLogout} from "../services/auth";

export default function LogoutFAB() {
  return (
	<button
	  className="w-max aspect-square bg-red-200 text-red-600 hover:bg-red-500 hover:text-red-100 text-sm rounded-full transition-all p-3"
	  onClick={() => handleAuthLogout()}
	>
	  <BsPower className="w-max aspect-square" size={16}/>
	</button>
  )
}