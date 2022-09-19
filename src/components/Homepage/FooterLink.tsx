import {FC} from "react";
import {BsArrowUpRight} from "react-icons/bs";
import {FooterProps} from "../../types/home";

const FooterLink: FC<FooterProps> = ({title, href, newTab = false}) => (
  <a
	href={href}
	target={newTab ? "_blank" : "_self"}
	rel="noreferrer noopener"
	className="text-neutral-100 hover:text-neutral-400 hover:underline hover:underline-offset-2 transition-all"
  >
	<div className="flex items-center gap-3">
	  <BsArrowUpRight size={20}/> <p className="text-xl font-light">{title}</p>
	</div>
  </a>
);

export default FooterLink;