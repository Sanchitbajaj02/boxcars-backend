"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = exports.loginSchema = exports.emailSchema = void 0;
const zod_1 = require("zod");
exports.emailSchema = zod_1.z.string().email().min(3).max(255);
const passwordSchema = zod_1.z.string().min(6).max(32);
exports.loginSchema = zod_1.z.object({
    email: exports.emailSchema,
    password: passwordSchema,
});
exports.registerSchema = exports.loginSchema
    .extend({
    fullName: zod_1.z
        .string()
        .trim()
        .regex(/^[a-zA-Z][a-zA-Z\s.-]*$/)
        .min(3)
        .max(100),
    confirmPassword: zod_1.z.string().min(6).max(32),
})
    .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
});
//# sourceMappingURL=auth.schema.js.map