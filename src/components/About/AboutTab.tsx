import { ArrowRightCircle } from "lucide-react";

const AboutTab = () => {
	return (
		<>
			<div className="nd text-4xl font-bold text-pink-400">About Me</div>

			<div className="text-foreground/70 mt-4">
				I’m a passionate and detail-oriented Frontend Developer with a strong
				focus on building visually appealing and user-friendly web applications.
				With experience in HTML, CSS, JavaScript, and modern frontend frameworks
				like React JS, I enjoy transforming design concepts into interactive and
				responsive user interfaces.
			</div>

			<div className="text-foreground/50 mt-4 hidden space-y-2 lg:block">
				<span>Apart from coding, some other activities that I love to do!</span>
				<span className="flex items-center gap-3">
					<ArrowRightCircle />
					Playing Games
				</span>
				<span className="flex items-center gap-3">
					<ArrowRightCircle /> Lisenting Music
				</span>
				<span className="flex items-center gap-3">
					<ArrowRightCircle /> Travelling
				</span>
			</div>

			<div className="mt-12 grid grid-cols-1 gap-4 text-start text-xl lg:grid-cols-2">
				<div>
					<span className="text-default-pink">Name :</span> Subham Dutta
				</div>
				<div>
					<span className="text-default-pink">Phone No. :</span> +911234567890
				</div>
				<div>
					<span className="text-default-pink">Exprience :</span> Freshers
				</div>
				<div>
					<span className="text-default-pink">Nationality :</span> Indian
				</div>
				<div className="">
					<span className="text-default-pink"> Email : </span>
					mr.subhamdutta@gmail.com
				</div>
				<div>
					<span className="text-default-pink">Languages :</span> Bengali, Hindi,
					English
				</div>
			</div>
		</>
	);
};

export default AboutTab;
