import {FC} from "react";
import {HomeFeatureProps} from "../../types/home";

const HomeFeature: FC<HomeFeatureProps> = ({title, Icon, url = "", children}) => {
  return (
	<div
	  className="flex flex-col gap-5 h-full border border-neutral-800 hover:cursor-pointer rounded px-7 py-10 transition-all"
	>
	  <div className="w-min aspect-square bg-darker text-neutral-50 p-4 rounded">
		<Icon size={16}/>
	  </div>
	  <h1 className="w-4/5 space-grotesk text-4xl font-bold">{title}</h1>
	  <p className="text-neutral-600 text-base leading-loose font-medium">
		{children}
	  </p>

	  <a href={url} className="text-darker hover:text-opacity-50 text-sm font-medium text-right mt-auto underline underline-offset-2 px-2">
		Read more
	  </a>
	</div>
  )
}

export default HomeFeature