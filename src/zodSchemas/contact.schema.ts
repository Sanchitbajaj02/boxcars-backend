import { z } from "zod";
import { emailSchema } from "./auth.schema";

export const contactSchema = z.object({
  name: z.string(),
  email: emailSchema,
  phone: z.string().trim().regex(/^\d{10}$/),
  message: z.string().min(3)
})