"use client";
import { ContactfFormSchemaType, formSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, SendIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../shadcnui/button";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";
const ContactForm = () => {
	const {
		handleSubmit,
		control,
		reset,
		formState: { isSubmitting },
	} = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			userName: "",
			userEmail: "",
			userMobileNo: "",
			userFeedBack: "",
		},
		mode: "onSubmit",
	});

	const sendData = async (fData: ContactfFormSchemaType) => {
		await new Promise<void>((r) => setTimeout(r, 1800));
		console.log(fData);
		reset();
	};
	return (
		<form
			onSubmit={handleSubmit(sendData)}
			className="space-y-4"
			noValidate>
			<Controller
				name="userName"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>
							Your Name <span className="text-red-500">*</span>
						</FieldLabel>
						<Input
							{...field}
							id={field.name}
							type="text"
							aria-invalid={fieldState.invalid}
							placeholder="Full Name"
							autoComplete="name"
						/>

						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				name="userEmail"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>
							Your Email Id <span className="text-red-500">*</span>
						</FieldLabel>
						<Input
							{...field}
							id={field.name}
							type="email"
							aria-invalid={fieldState.invalid}
							placeholder="Email ID"
							autoComplete="email"
						/>

						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				name="userMobileNo"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>
							Your Conatct Number <span className="text-red-500">*</span>
						</FieldLabel>
						<Input
							{...field}
							id={field.name}
							type="number"
							aria-invalid={fieldState.invalid}
							placeholder="Contact Number"
							autoComplete="mobile tel"
						/>

						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>
			<Controller
				name="userFeedBack"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>Message</FieldLabel>
						<Input
							{...field}
							id={field.name}
							type="text"
							aria-invalid={fieldState.invalid}
							placeholder="Share Your Thoughts with Me "
							autoComplete="off"
							className="pt-4 pb-24"
						/>

						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Button
				className="w-full"
				disabled={isSubmitting}>
				{isSubmitting ? (
					<>
						<LoaderIcon className="animate-spin" /> Sending...
					</>
				) : (
					<>
						<SendIcon /> Send
					</>
				)}
			</Button>
		</form>
	);
};

export default ContactForm;
