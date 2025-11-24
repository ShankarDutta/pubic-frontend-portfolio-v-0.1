import { LightRays } from "@/components/magicui/light-rays";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import TypingAnimation from "@/components/TypingAnimation";
import { DownloadIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Nextjs Starter Frontend",
	description: "Production grade Next.js starter template",
};

const page = () => {
	return (
		<section className="flex min-h-[80dvh] w-full flex-col items-center justify-center gap-10 pt-30 lg:flex-row-reverse lg:justify-start lg:gap-20">
			{/* backgroun light effect  */}
			<LightRays />

			{/* image desktop right side */}
			<Image
				src={"/profile-picture.png"}
				alt="Profile picture"
				width={320}
				height={320}
				loading="eager"
				className="z-20 h-64 w-64 rounded-full shadow-lg shadow-pink-500 lg:h-80 lg:w-80"
			/>

			<div className="space-y-4 text-center lg:text-start">
				{/* Typing animation  */}
				<TypingAnimation />

				{/* heading  */}
				<h1 className="text-5xl font-bold tracking-wide">
					<span className="text-foreground leading-14">Hello I&apos;m </span>
					<span className="leading-14 text-pink-500">Subham Dutta</span>
				</h1>

				{/* parargraph  */}
				<p className="lg:text-lg">
					I&apos;m a passionate Frontend Developer with a keen eye for design &
					a love for crafting seamless user exprience. I focus on clean code,
					performance, and accessibility to deliver seamless digital solutions.
				</p>

				{/* download btn  */}
				<div className="grid place-items-center lg:place-items-start">
					<a
						className=""
						href="" //add your pdf link (first add the cv pdf on public folder and add it href tag )
						download={true}>
						<button
							className="flex cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-pink-500 bg-transparent px-8 py-1.5 text-lg hover:bg-pink-500 hover:text-white"
							aria-label="Cv-Download Button">
							Download CV <DownloadIcon />
						</button>
					</a>
				</div>

				{/* social media icon  */}
				<SocialMediaIcons />
			</div>
		</section>
	);
};

export default page;
