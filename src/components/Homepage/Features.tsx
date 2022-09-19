import {BiMoney} from "react-icons/bi";
import {BsCodeSlash, BsPaintBucket} from "react-icons/bs";
import HomeFeature from "./HomeFeature";

const Features = () => {
  return (
	<section className="w-[86vw] lg:w-5/6 2xl:w-4/5 lg:h-screen lg:flex lg:items-center mx-auto text-dark pt-16 pb-20">
	  <div>
		<h1 className="text-5xl lg:text-7xl text-left font-bold">Features</h1>
		<p className="text-left text-base text-neutral-400 font-medium py-5">
		  We have quite a couple of major features to make your resume building experience as easy and interesting as possible.
		</p>
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 mt-8">
		  <HomeFeature title="Free & easy to use" Icon={BiMoney}>
			No hidden fees or charges for creating or downloading your resume; it's free and always will be; hopefully. We are a very
			small team of developers and we don't want to charge you for using our service. ResuMake also has a simple and intuitive user
			interface that makes it easy to create a resume in minutes.
		  </HomeFeature>
		  <HomeFeature title="Open-Source" Icon={BsCodeSlash}>
			You can make your own changes to the code to get features you desire and even self-host your own instance of ResuMake. We are
			open to contributions and pull requests on our GitHub repository and we will be happy to review them and make the product even
			better for you.
		  </HomeFeature>
		  <HomeFeature title="Customization" Icon={BsPaintBucket}>
			All our included templates are totally free to use and you will have more to pick from in the future. And with our
			community-powered template store coming soon, you can even create your own templates and share them with the world as ResuMake
			is powered by one of the most popular front-end frameworks/libraries; React.js.
		  </HomeFeature>
		</div>
		<p className="bg-darker text-neutral-200 text-sm leading-loose font-medium mt-8 px-6 py-8">
		  If you're reading this, you're undoubtedly wondering who the target audience is for this product. That's great news, because it
		  applies to everyone. This product was designed for anyone.
		</p>
	  </div>
	</section>
  )
}

export default Features