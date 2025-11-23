import { NavItemsType } from "./type";

export const navItems: NavItemsType = [
	{ id: 1, label: "Home", urlid: { pathname: "/" } },
	{
		id: 2,
		label: "About",
		urlid: { pathname: "/aboutme" },
	},
	{
		id: 3,
		label: "Projects",
		urlid: { pathname: "/projects" },
	},
	{
		id: 4,
		label: "Contact",
		urlid: { pathname: "contact" },
	},
];
