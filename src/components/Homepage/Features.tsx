import {BiMoney} from "react-icons/bi";
import {BsCodeSlash, BsPaintBucket} from "react-icons/bs";
import HomeFeature from "./HomeFeature";

const Features = () => {
  return (
	<section className="w-[88vw] lg:w-5/6 2xl:w-4/5 lg:h-screen lg:flex lg:items-center mx-auto text-dark pt-16">
	  <div>
		<h1 className="text-5xl lg:text-7xl text-left font-bold text-black">Features</h1>
		<p className="text-left text-sm text-neutral-400 font-normal py-5">
		  We have quite a couple of major features to make your resume building experience as easy and interesting as possible.
		</p>
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-7 mt-5 lg:mt-8">
		  <HomeFeature title="Free & easy to use" Icon={BiMoney}>
			No hidden fees or charges for creating or downloading your resume; it's free and always will be; hopefully. We are a very
			small team of developers and we don't want to charge you for using our service. ResuMake also has a simple and intuitive user
			interface that makes it easy to create a resume in minutes.
		  </HomeFeature>
		  <HomeFeature title="Open-Source" Icon={BsCodeSlash}>
			You can make your own changes to the code to get features you desire with a pull request or even self-host your own instance of
			ResuMake as it is publicly available. We are open to contributions and pull requests on our GitHub repository and we will be
			happy to review them and make the product even better for you.
		  </HomeFeature>
		  <HomeFeature title="Customization" Icon={BsPaintBucket}>
			All our included templates are totally free to use and you will have more to pick from in the future. And with our
			community-powered template store coming <b>soon</b>, you can even create your own templates and share them with the world as
			ResuMake templates are written in normal CSS and HTML.
		  </HomeFeature>
		</div>
		<p className="bg-darker text-neutral-200 text-sm leading-loose font-medium mt-8 px-8 py-8">
		  If you're reading this, you're undoubtedly wondering who the target audience is for this product. That's great news, because it
		  applies to everyone. Feel free to reach out to us to sponsor this project or to contribute to it in any way.
		</p>
	  </div>
	</section>
  )
}

export default Features