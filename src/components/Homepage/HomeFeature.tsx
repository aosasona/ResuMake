import {FC} from "react";
import {HomeFeatureProps} from "../../types/home";

const HomeFeature: FC<HomeFeatureProps> = ({title, Icon, children}) => {
  return (
	<div
	  className="flex flex-col gap-5 h-full border border-neutral-800 hover:scale-95 hover:-rotate-2 hover:border-none hover:bg-neutral-200 hover:cursor-pointer px-8 py-10 transition-all">
	  <div className="w-min aspect-square bg-darker text-neutral-50 p-4">
		<Icon size={20}/>
	  </div>
	  <h1 className="w-4/5 text-4xl font-bold">{title}</h1>
	  <p className="text-neutral-600 text-base leading-loose font-medium">
		{children}
	  </p>
	</div>
  )
}

export default HomeFeature