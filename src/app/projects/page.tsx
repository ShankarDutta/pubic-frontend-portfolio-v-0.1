"use client";

import FrontendProjectsTab from "@/components/Projects/FrontendProjectsTab";
import FullStackProjectsTab from "@/components/Projects/FullStackProjectsTab";
import JsProjectsTab from "@/components/Projects/JsProjectsTab";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/shadcnui/select";

import { Tabs, TabsContent } from "@/components/shadcnui/tabs";
import { projectCategoryAtom } from "@/lib/atom";
import { useAtomValue, useSetAtom } from "jotai";

const Page = () => {
	const value = useAtomValue(projectCategoryAtom);
	const setValue = useSetAtom(projectCategoryAtom);

	return (
		<section className="flex flex-col justify-center gap-5 pt-20 lg:h-[95dvh] lg:pt-0">
			<div className="flex justify-between">
				<h1 className="text-2xl font-semibold">My Projects</h1>

				<Select
					value={value}
					onValueChange={(val) => setValue(val)}>
					<SelectTrigger className="w-[200px] border-0 bg-transparent backdrop-blur-md">
						<SelectValue />
					</SelectTrigger>

					<SelectContent className="">
						<SelectItem value="js-project">JS Mini Projects</SelectItem>
						<SelectItem value="frontend-project">Frontend Projects</SelectItem>
						<SelectItem value="fullstack-project">
							Full Stack Projects
						</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<Tabs
				value={value}
				onValueChange={setValue}
				className="w-full">
				<TabsContent value="js-project">
					<div className="grid grid-cols-1 gap-4 pb-5 md:grid-cols-2 lg:grid-cols-3">
						<JsProjectsTab />
					</div>
				</TabsContent>

				<TabsContent value="frontend-project">
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
						<FrontendProjectsTab />
					</div>
				</TabsContent>

				<TabsContent value="fullstack-project">
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
						<FullStackProjectsTab />
					</div>
				</TabsContent>
			</Tabs>
		</section>
	);
};

export default Page;
