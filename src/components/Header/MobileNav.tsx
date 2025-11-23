"use client";
import { navItems } from "@/lib/infomations";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../shadcnui/sheet";
import Logo from "./Logo";

const MobileNav = () => {
	const [isOpen, setOpen] = useState(false);
	const path = usePathname();

	return (
		<Sheet
			open={isOpen}
			onOpenChange={setOpen}>
			<SheetTrigger aria-label="Mobile-Nav-Open-Button">
				<Menu size={28} />
			</SheetTrigger>

			<SheetContent className="bg-white backdrop-blur-md dark:bg-transparent">
				<SheetHeader className="border-b-2">
					<SheetTitle aria-label="Mobile-Nav-Logo">
						<Logo />
					</SheetTitle>
					<SheetDescription />
				</SheetHeader>

				<div className="grid grid-cols-1 place-items-center gap-4 font-semibold">
					{navItems.map((item) => (
						<Link
							href={item.urlid}
							key={item.id}
							onClick={() => setOpen(false)}
							className={`font-semibold hover:text-pink-500 hover:dark:text-pink-400 ${path === item.urlid.pathname ? "text-pink-500 dark:text-pink-400" : "text-black dark:text-white"}`}>
							{item.label}
						</Link>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
