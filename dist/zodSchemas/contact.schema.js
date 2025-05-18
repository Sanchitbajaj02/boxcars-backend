"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactSchema = void 0;
const zod_1 = require("zod");
const auth_schema_1 = require("./auth.schema");
exports.contactSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: auth_schema_1.emailSchema,
    phone: zod_1.z
        .string()
        .trim()
        .regex(/^\d{10}$/),
    message: zod_1.z.string().min(3),
});
//# sourceMappingURL=contact.schema.js.map