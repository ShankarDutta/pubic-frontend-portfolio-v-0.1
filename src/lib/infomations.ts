import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import {
	educationDetailType,
	NavItemsType,
	ProjectsDetailsType,
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

export const javaScriptProjectsDetails: ProjectsDetailsType = [
	{
		id: 1,
		name: "Emi Calculator",
		description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laboriosam possimus soluta esse ab!`,
		url: "/",
		githubRepoLink: "/",
		img: "/Jsprojects/project1.png",
	},
	{
		id: 2,
		name: "Digital Clock",
		description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laboriosam possimus soluta esse ab!`,
		url: "/",
		githubRepoLink: "/",
		img: "/Jsprojects/project2.png",
	},
	{
		id: 3,
		name: "Qr Code Generator",
		description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laboriosam possimus soluta esse ab!`,
		url: "/",
		githubRepoLink: "/",
		img: "/Jsprojects/project3.png",
	},
];

export const frontendProjectsDetails: ProjectsDetailsType = [
	{
		id: 1,
		name: "Weather App",
		description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laboriosam possimus soluta esse ab!`,
		url: "/",
		githubRepoLink: "/",
		img: "/Frontendprojects/project-1.png",
	},
	{
		id: 2,
		name: "Artificial Inteligence Landing Page",
		description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laboriosam possimus soluta esse ab!`,
		url: "/",
		githubRepoLink: "/",
		img: "/Frontendprojects/project-2.jpg",
	},
	{
		id: 3,
		name: "Job Portal App",
		description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laboriosam possimus soluta esse ab!`,
		url: "/",
		githubRepoLink: "/",
		img: "/Frontendprojects/project-3.png",
	},
];

export const FullStackDetails: ProjectsDetailsType = [
	{
		id: 1,
		name: "E-Commerce Website",
		description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laboriosam possimus soluta esse ab!`,
		url: "/",
		githubRepoLink: "/",
		img: "/Fullstackprojects/project1.png",
	},
	{
		id: 2,
		name: "Url Shortern Website",
		description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laboriosam possimus soluta esse ab!`,
		url: "/",
		githubRepoLink: "/",
		img: "/Fullstackprojects/project2.png",
	},
	{
		id: 3,
		name: "Movie Ticket Booking App",
		description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laboriosam possimus soluta esse ab!`,
		url: "/",
		githubRepoLink: "/",
		img: "/Fullstackprojects/project3.png",
	},
];
