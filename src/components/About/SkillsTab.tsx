import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/shadcnui/tooltip";

import {
	FaBootstrap,
	FaCss3,
	FaGitAlt,
	FaHtml5,
	FaJs,
	FaNodeJs,
	FaNpm,
	FaReact,
} from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
	SiBun,
	SiNextui,
	SiShadcnui,
	SiSwiper,
	SiTypescript,
} from "react-icons/si";

const SkillsTab = () => {
	return (
		<>
			<div className="text-4xl font-bold text-pink-400">My Skills</div>

			<div className="text-foreground/50 mt-4">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, cumque!
			</div>

			<div className="mt-4 text-2xl font-semibold text-wrap">
				Professional <span className="text-default-pink">Skillset</span>
			</div>

			<div className="text-foreground/80 mt-5 grid grid-cols-3 place-items-center gap-5 lg:grid-cols-5">
				<TooltipProvider>
					{/* html */}
					<Tooltip>
						<TooltipTrigger
							value="react"
							className="border-default-pink dark:border-foreground/50 rounded-xl border-2 p-3">
							<FaHtml5 size={64} />
						</TooltipTrigger>

						<TooltipContent>HTML5</TooltipContent>
					</Tooltip>

					{/* css */}
					<Tooltip>
						<TooltipTrigger
							value="react"
							className="border-default-pink dark:border-foreground/50 rounded-xl border-2 p-3">
							<FaCss3 size={64} />
						</TooltipTrigger>

						<TooltipContent>CSS3</TooltipContent>
					</Tooltip>

					{/* bootstrap */}
					<Tooltip>
						<TooltipTrigger
							value="react"
							className="border-default-pink dark:border-foreground/50 rounded-xl border-2 p-3">
							<FaBootstrap size={64} />
						</TooltipTrigger>

						<TooltipContent>Bootstrap</TooltipContent>
					</Tooltip>

					{/* JS */}
					<Tooltip>
						<TooltipTrigger
							value="react"
							className="border-default-pink dark:border-foreground/50 rounded-xl border-2 p-3">
							<FaJs size={64} />
						</TooltipTrigger>

						<TooltipContent>JavaScript</TooltipContent>
					</Tooltip>

					{/* nodeJs */}
					<Tooltip>
						<TooltipTrigger
							value="react"
							className="border-default-pink dark:border-foreground/50 rounded-xl border-2 p-3">
							<FaNodeJs size={64} />
						</TooltipTrigger>

						<TooltipContent>Node JS</TooltipContent>
					</Tooltip>

					{/* React */}
					<Tooltip>
						<TooltipTrigger
							value="react"
							className="border-default-pink dark:border-foreground/50 rounded-xl border-2 p-3">
							<FaReact size={64} />
						</TooltipTrigger>

						<TooltipContent>React</TooltipContent>
					</Tooltip>

					{/* nextjs */}
					<Tooltip>
						<TooltipTrigger
							value="react"
							className="border-default-pink dark:border-foreground/50 rounded-xl border-2 p-3">
							<RiNextjsFill size={64} />
						</TooltipTrigger>

						<TooltipContent>Next JS</TooltipContent>
					</Tooltip>

					{/* bun */}
					<Tooltip>
						<TooltipTrigger
							value="react"
							className="border-default-pink dark:border-foreground/50 rounded-xl border-2 p-3">
							<SiBun size={64} />
						</TooltipTrigger>

						<TooltipContent>BUN</TooltipContent>
					</Tooltip>

					{/* /tailwind */}
					<Tooltip>
						<TooltipTrigger
							value="react"
							className="border-default-pink dark:border-foreground/50 rounded-xl border-2 p-3">
							<RiTailwindCssFill size={64} />
						</TooltipTrigger>

						<TooltipContent>Tailwind CSS</TooltipContent>
					</Tooltip>

					{/* typeScript */}
					<Tooltip>
						<TooltipTrigger
							value="react"
							className="border-default-pink dark:border-foreground/50 rounded-xl border-2 p-3">
							<SiTypescript size={64} />
						</TooltipTrigger>

						<TooltipContent>TypeScript</TooltipContent>
					</Tooltip>

					{/* shadcn ui */}
					<Tooltip>
						<TooltipTrigger
							value="react"
							className="border-default-pink dark:border-foreground/50 rounded-xl border-2 p-3">
							<SiShadcnui size={64} />
						</TooltipTrigger>

						<TooltipContent>ShadcnUI</TooltipContent>
					</Tooltip>

					{/* nextui */}
					<Tooltip>
						<TooltipTrigger
							value="react"
							className="border-default-pink dark:border-foreground/50 rounded-xl border-2 p-3">
							<SiNextui size={64} />
						</TooltipTrigger>

						<TooltipContent>NextUI</TooltipContent>
					</Tooltip>

					{/* npm  */}
					<Tooltip>
						<TooltipTrigger
							value="react"
							className="border-default-pink dark:border-foreground/50 rounded-xl border-2 p-3">
							<FaNpm size={64} />
						</TooltipTrigger>

						<TooltipContent>npm</TooltipContent>
					</Tooltip>

					{/* git */}
					<Tooltip>
						<TooltipTrigger
							value="react"
							className="border-default-pink dark:border-foreground/50 rounded-xl border-2 p-3">
							<FaGitAlt size={64} />
						</TooltipTrigger>

						<TooltipContent>git</TooltipContent>
					</Tooltip>

					{/* swiper */}
					<Tooltip>
						<TooltipTrigger
							value="react"
							className="border-default-pink dark:border-foreground/50 rounded-xl border-2 p-3">
							<SiSwiper size={64} />
						</TooltipTrigger>

						<TooltipContent>Swiper JS</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
		</>
	);
};

export default SkillsTab;
