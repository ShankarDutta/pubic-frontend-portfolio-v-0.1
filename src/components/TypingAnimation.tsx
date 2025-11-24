"use client";
import Typewriter from "typewriter-effect";

const TypingAnimation = () => {
	return (
		<div className="text-2xl font-medium">
			<Typewriter
				options={{
					strings: ["Frontend Web Developer", "Full Stack Web Developer"],
					autoStart: true,
					loop: true,
				}}
			/>
		</div>
	);
};

export default TypingAnimation;
