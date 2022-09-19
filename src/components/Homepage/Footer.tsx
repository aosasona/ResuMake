import FooterLink from "./FooterLink";

const Footer = () => {
  return (
	<footer className="bg-darker px-12">
	  <div className="flex flex-col lg:flex-row lg:justify-evenly gap-10 pt-[10vh] pt-[6vh]">
		<section className="flex flex-col gap-8">
		  <FooterLink title="Get started" href="/editor"/>
		  <FooterLink title="View on GitHub" newTab={true} href="https://github.com/aosasona/ResuMake"/>
		  <FooterLink title="Documentation" href="/docs"/>
		</section>
		<section className="flex flex-col gap-8">
		  <FooterLink title="Privacy policy" href="/privacy-policy"/>
		  <FooterLink title="Terms & conditions" href="/terms-and-conditions"/>
		  <FooterLink title="FAQs" href="/faqs"/>
		</section>
	  </div>
	  <p className="text-sm text-center text-neutral-400 py-20">
		&copy; 2021 ResuMake. All rights reserved.
	  </p>
	</footer>
  )
}

export default Footer