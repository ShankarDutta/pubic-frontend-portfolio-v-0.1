import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import { NavItemsType, SocialMediaIconsType } from "./type";

export const navItems: NavItemsType = [
	{ id: 1, label: "Home", urlid: { pathname: "/" } },
	{
		id: 2,
		label: "About",
		urlid: { pathname: "/about" },
	},
	{
		id: 3,
		label: "Projects",
		urlid: { pathname: "/projects" },
	},
	{
		id: 4,
		label: "Contact",
		urlid: { pathname: "/contact" },
	},
];

export const socialMediaIcons: SocialMediaIconsType = [
	{
		id: 1,
		icons: ImFacebook,
		link: "/", // add your facebook account link
		ariaName: "Facebook-icon",
	},
	{
		id: 2,
		icons: FiInstagram,
		link: "/", // add your insta account Link
		ariaName: "Instagram-icon",
	},
	{
		id: 3,
		icons: FiGithub,
		link: "/", // add your github account link
		ariaName: "github-icon",
	},
	{
		id: 4,
		icons: FaLinkedinIn,
		link: "/", // add your linkedin account link
		ariaName: "linkedin-icon",
	},
];
