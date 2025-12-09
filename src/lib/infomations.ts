import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import {
	educationDetailType,
	FrontendProjectsDetailsType,
	FullStackDetailsType,
	JavaScriptProjectsDetailsType,
	NavItemsType,
	SocialMediaIconsType,
} from "./type";

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

export const educationDetails: educationDetailType = [
	{
		id: "item01",
		boardName: "West Bengal Board of Secondary Education",
		year: "2014-2015",
		degree: "10th",
		marks: "90%",
		subject: "",
	},
	{
		id: "item02",
		boardName: "West Bengal Council of Higher Secondary Education",
		year: "2015-2017",
		degree: "10+2",
		marks: "85%",
		subject: "Arts",
	},
	{
		id: "item03",
		boardName: "Barinware University",
		year: "2017-2020",
		degree: "Undergraduate",
		marks: "89%",
		subject: "B.Tech in Computer Science Engineering",
	},

	{
		id: "item04",
		boardName: "Central Institute of Technology",
		year: "2020-2023",
		degree: "Fullstack Developer",
		marks: "90%",
		subject: "",
	},
];

export const javaScriptProjectsDetails: JavaScriptProjectsDetailsType = [
	{
		id: 1,
		name: "",
		url: "/",
		githubRepoLink: "/",
	},
	{
		id: 2,
		name: "",
		url: "/",
		githubRepoLink: "/",
	},
	{
		id: 3,
		name: "",
		url: "/",
		githubRepoLink: "/",
	},
];

export const frontendProjectsDetails: FrontendProjectsDetailsType = [
	{
		id: 1,
		name: "",
		url: "/",
		githubRepoLink: "/",
	},
	{
		id: 2,
		name: "",
		url: "/",
		githubRepoLink: "/",
	},
	{
		id: 3,
		name: "",
		url: "/",
		githubRepoLink: "/",
	},
];

export const FullStackDetails: FullStackDetailsType = [
	{
		id: 1,
		name: "",
		url: "/",
		githubRepoLink: "/",
	},
	{
		id: 2,
		name: "",
		url: "/",
		githubRepoLink: "/",
	},
	{
		id: 3,
		name: "",
		url: "/",
		githubRepoLink: "/",
	},
];
