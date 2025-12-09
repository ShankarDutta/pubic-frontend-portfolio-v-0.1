import { IconType } from "react-icons";
import { UrlObject } from "url";
export type NavItemsType = {
	id: number;
	label: string;
	urlid: UrlObject;
}[];

export type SocialMediaIconsType = {
	id: number;
	icons: IconType;
	link: string;
	ariaName: string;
}[];

export type educationDetailType = {
	id: string;
	boardName: string;
	year: string;
	degree: string;
	marks: string;
	subject: string;
}[];

export type JavaScriptProjectsDetailsType = {
	id: number;
	name: string;
	url: string;
	githubRepoLink: string;
}[];

export type FrontendProjectsDetailsType = {
	id: number;
	name: string;
	url: string;
	githubRepoLink: string;
}[];

export type FullStackDetailsType = {
	id: number;
	name: string;
	url: string;
	githubRepoLink: string;
}[];
