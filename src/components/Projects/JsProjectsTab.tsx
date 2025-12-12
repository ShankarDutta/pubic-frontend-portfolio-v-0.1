import { javaScriptProjectsDetails } from "@/lib/infomations";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../shadcnui/card";
const JsProjectsTab = () => {
	return (
		<>
			{javaScriptProjectsDetails.map((item) => {
				return (
					<Card key={item.id}>
						<CardHeader>
							<Image
								src={`${item.img}`}
								alt={item.name}
								height={600}
								width={600}
								loading="eager"
								className="h-auto w-full rounded-2xl lg:h-[200px]"
							/>
						</CardHeader>

						<CardContent className="space-y-2">
							<div className="flex items-center justify-between">
								<CardTitle>{item.name}</CardTitle>
								<div className="flex items-center gap-2">
									<a
										href={`${item.url}`}
										target="_blank"
										className="hover:text-pink-400">
										<ExternalLinkIcon size={24} />
									</a>
									<a
										href={`${item.githubRepoLink}`}
										target="_blank"
										className="hover:text-pink-400">
										<FaGithub size={24} />
									</a>
								</div>
							</div>
							<CardDescription>{item.description}</CardDescription>
						</CardContent>
					</Card>
				);
			})}
		</>
	);
};

export default JsProjectsTab;
