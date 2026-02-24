import AboutTab from "@/components/About/AboutTab";
import EducationTab from "@/components/About/EducationTab";
import SkillsTab from "@/components/About/SkillsTab";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/shadcnui/tabs";

const page = () => {
	return (
		<>
			<section className="flex flex-col justify-center pt-24 lg:h-[96dvh] lg:pt-0">
				<div className="">
					<Tabs
						defaultValue="education"
						className="flex flex-col gap-10 lg:flex-row lg:gap-20">
						<TabsList className="mx-auto flex h-full flex-col gap-3 bg-transparent md:mx-0">
							<TabsTrigger
								className="bg-foreground/5 w-64 cursor-pointer rounded-lg py-3 text-lg data-[state=active]:bg-pink-500 data-[state=active]:text-white dark:data-[state=active]:bg-pink-500"
								value="education">
								Education
							</TabsTrigger>

							<TabsTrigger
								className="bg-foreground/5 w-64 cursor-pointer rounded-lg py-3 text-lg data-[state=active]:bg-pink-500 data-[state=active]:text-white dark:data-[state=active]:bg-pink-500"
								value="skills">
								Skills
							</TabsTrigger>

							<TabsTrigger
								className="bg-foreground/5 w-64 cursor-pointer rounded-lg py-3 text-lg data-[state=active]:bg-pink-500 data-[state=active]:text-white dark:data-[state=active]:bg-pink-500"
								value="about-me">
								About Me
							</TabsTrigger>
						</TabsList>

						{/* content start */}

						{/* education Tab */}

						<TabsContent
							className="font-jetbrains text-center lg:text-start"
							value="education">
							<EducationTab />
						</TabsContent>

						{/* Skills Tab */}

						<TabsContent
							className="font-jetbrains pb-[34px] text-center lg:text-start"
							value="skills">
							<SkillsTab />
						</TabsContent>

						<TabsContent
							className="font-jetbrains pb-[74px] text-center lg:text-start"
							value="about-me">
							<AboutTab />
						</TabsContent>
					</Tabs>
				</div>
			</section>
		</>
	);
};

export default page;
