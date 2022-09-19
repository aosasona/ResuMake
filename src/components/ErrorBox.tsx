import {useEffect} from "react";

const ErrorBox = ({status, timeout = 5000, setStatus}: { status: any; timeout?: number; setStatus: any }) => {
  useEffect(() => {
	const timer = setTimeout(() => {
	  setStatus({
		...status,
		error: false,
		message: "",
	  })
	}, timeout)
	return () => clearTimeout(timer)
  }, [status, timeout]);
  if (!status.error) return null
  return (
	<div className="text-red-600 text-sm font-medium bg-red-300 bg-opacity-25 px-6 py-5">
	  <p>{status.message}</p>
	</div>
  )
}

export default ErrorBox