import {FiPower} from "react-icons/fi";
import {handleAuthLogout} from "../services/auth";

export default function LogoutFAB() {
  return (
	<div className="fixed top-2 right-0 bg-red-200 bg-opacity-50 rounded-l-full p-2 pr-4">
	  <button
		className="w-max aspect-square block bg-red-200 text-red-600 hover:bg-red-400 hover:bg-opacity-70 hover:text-red-100 text-sm rounded-full transition-all p-3"
		onClick={() => handleAuthLogout()}
	  >
		<FiPower size={16}/>
	  </button>
	</div>
  )
}