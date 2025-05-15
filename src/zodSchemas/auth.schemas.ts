import { z } from "zod";

export const emailSchema = z.string().email().min(3).max(255);
const passwordSchema = z.string().min(6).max(32);

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const registerSchema = loginSchema
  .extend({
    fullName: z
      .string()
      .trim()
      .regex(/^[a-zA-Z][a-zA-Z\s.-]*$/)
      .min(3)
      .max(100),
    confirmPassword: z.string().min(6).max(32),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });
