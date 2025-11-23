"use client";
import { navItems } from "@/lib/infomations";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopNav = () => {
	const path = usePathname();
	return (
		<>
			{navItems.map((item) => (
				<Link
					className={`font-semibold hover:text-pink-500 hover:dark:text-pink-400 ${path === item.urlid.pathname ? "text-pink-500 dark:text-pink-400" : "text-black dark:text-white"}`}
					key={item.id}
					href={item.urlid}>
					{item.label}
				</Link>
			))}
		</>
	);
};

export default DesktopNav;
