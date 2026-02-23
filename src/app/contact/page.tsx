import ContactForm from "@/components/Contact/ContactForm";
import Image from "next/image";

const page = () => {
	return (
		<section className="grid grid-cols-1 gap-6 pt-[94px] lg:grid-cols-2 lg:place-items-center">
			<Image
				src={"/contact-img.png"}
				alt="contact-img"
				height={600}
				width={600}
				loading="eager"
				className="mx-auto h-full w-auto lg:mx-0"
			/>

			<div className="w-auto space-y-3 px-6 pb-12 lg:w-[450px] lg:pb-0">
				<h1 className="text-4xl font-semibold text-pink-400">Conatct Me</h1>
				<ContactForm />
			</div>
		</section>
	);
};

export default page;
