import { socialMediaIcons } from "@/lib/infomations";

const SocialMediaIcons = () => {
	return (
		<section className="mt-6 flex justify-center gap-4 md:gap-8 lg:justify-start">
			{socialMediaIcons.map((icon) => {
				const Icon = icon.icons;
				return (
					<a
						href={icon.link}
						key={icon.id}
						aria-label={icon.ariaName}
						className="border-foreground text-foreground hover:border-background rounded-full border bg-transparent p-3 hover:bg-pink-500 hover:text-white">
						<Icon size={28} />
					</a>
				);
			})}
		</section>
	);
};

export default SocialMediaIcons;
