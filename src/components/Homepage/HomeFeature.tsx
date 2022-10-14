import {FC} from "react";
import {HomeFeatureProps} from "../../types/home";

const HomeFeature: FC<HomeFeatureProps> = ({title, Icon, url = "", children}) => {
  return (
	<div
	  className="flex flex-col gap-5 h-full bg-white hover:cursor-pointer px-7 py-10 transition-all"
	>

	  <div className="w-min aspect-square bg-darker text-neutral-50 p-4">
		<Icon size={16}/>
	  </div>
	  <h1 className="w-5/6 text-4xl font-bold">{title}</h1>
	  <p className="text-neutral-600 text-sm leading-loose font-normal">
		{children}
	  </p>
	  
	</div>
  )
}

export default HomeFeature