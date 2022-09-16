import {useTitle} from "../hooks";
import {LayoutProps} from "../types/default";

export default function Layout({children, title = "ResuMake"}: LayoutProps) {
  useTitle(title)
  return (
	<>
	  <main className="lg:hidden min-h-screen">
		<div className="w-5/6 h-screen mx-auto flex items-center justify-center">
		  <h1 className="text-xl text-center font-medium">Oops, this app is not available for your screen.</h1>
		</div>
	  </main>
	  <main className="hidden lg:inline-block min-h-screen bg-transparent w-screen">
		{children}
	  </main>
	</>
  )
}