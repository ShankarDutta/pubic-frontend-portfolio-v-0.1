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
