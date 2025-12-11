import { z } from "zod";
export const formSchema = z.object({
	userName: z.string().min(2, { error: "Invaild Name" }),
	userEmail: z.email({ error: "Inavild Email Id" }),
	userMobileNo: z.string().length(10, { error: "Invaild Conatct Number" }),
	userFeedBack: z.string(),
});

export type ContactfFormSchemaType = z.infer<typeof formSchema>;
