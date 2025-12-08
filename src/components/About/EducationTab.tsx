import { educationDetails } from "@/lib/infomations";

const EducationTab = () => {
	return (
		<>
			<div className="text-4xl font-bold text-pink-400">My Education</div>

			<div className="text-foreground/50 mt-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
				iste. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Voluptatem, ratione.
			</div>

			<div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
				{educationDetails.map((educationDetail) => {
					return (
						<div
							className="bg-foreground/5 rounded-lg px-6 py-6 text-center"
							key={educationDetail.id}>
							<div className="text-default-pink font-bold">
								{educationDetail.year}
							</div>
							<div className="text-xl font-bold">
								{educationDetail.boardName}
							</div>
							<div className="text-foreground/80">{educationDetail.degree}</div>
							<div className="text-foreground/50">
								{educationDetail.subject}
							</div>
							<div className="text-foreground/50">
								Obtain Percentage: {educationDetail.marks}
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default EducationTab;
