import FAQ from "./FAQ";

export default function FAQSection() {
  return <section className="w-[88vw] lg:w-5/6 2xl:w-4/5 mx-auto text-dark mt-14 lg:mt-0 pb-20">
	<h1 className="text-5xl lg:text-7xl text-left font-bold text-black mb-2">FAQs</h1>
	<FAQ question="What is ResuMake?">
	  ResuMake is a free and open-source resume builder that allows you to create beautiful resumes in minutes; designed to be built up by the community, for the community.
	</FAQ>

	<FAQ question="How do I create a resume?">
	  To create a resume, you need to create an account on ResuMake and you can start creating your resume immediately. Click "Get Started" in the navigation bar above to get started.
	</FAQ>

	<FAQ question="Can I self-host ResuMake?">
	  Yes, you can self-host ResuMake on your own server. You can find the source code on our GitHub repository.
	</FAQ>

	<FAQ question="Can I monetise my hosted version of ResuMake?">
	  ResuMake is licensed under the GNU General Public License v3.0, which means you can't monetise your hosted version of ResuMake without complying with the terms of the license.
	</FAQ>
  </section>;
}