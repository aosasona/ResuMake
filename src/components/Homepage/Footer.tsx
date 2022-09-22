import FooterLink from "./FooterLink";

const Footer = () => {

  const currentYear = new Date().getFullYear()

  return (
	<footer className="bg-darker px-12">
	  <div className="flex flex-col lg:flex-row lg:justify-evenly gap-10 pt-[10vh] pt-[6vh]">
		<section className="flex flex-col gap-8">
		  <FooterLink title="Get started" href="/editor"/>
		  <FooterLink title="Blog" href="/blog"/>
		  <FooterLink title="FAQs" href="/faqs"/>
		  <FooterLink title="Documentation" href="/docs"/>
		</section>
		<section className="flex flex-col gap-8">
		  <FooterLink title="Privacy policy" href="/privacy-policy"/>
		  <FooterLink title="Terms & conditions" href="/terms-and-conditions"/>
		  <FooterLink title="View on GitHub" newTab={true} href="https://github.com/aosasona/ResuMake"/>
		  <FooterLink title="Say Hi on Twitter" href="#"/>
		</section>
	  </div>
	  <p className="text-xs text-center text-neutral-500 font-light py-20">
		&copy; {currentYear} ResuMake. All rights reserved.
	  </p>
	</footer>
  )
}

export default Footer