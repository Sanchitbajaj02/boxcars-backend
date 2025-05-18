"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleSchema = exports.vehicleIdSchema = void 0;
const zod_1 = require("zod");
const currentYear = new Date().getFullYear() + 1;
const yearSchema = zod_1.z.number().int().gte(1900).lte(currentYear);
exports.vehicleIdSchema = zod_1.z.string();
exports.vehicleSchema = zod_1.z.object({
    vehicleMake: zod_1.z.string(),
    vehicleModel: zod_1.z.string(),
    vehicleYear: yearSchema,
    vehiclePrice: zod_1.z.number().min(0),
    vehicleMileage: zod_1.z.number().min(0).optional(),
    vehicleFuelType: zod_1.z.enum(["PETROL", "DIESEL", "ELECTRIC", "HYBRID"]),
    vehicleTransmission: zod_1.z.enum(["MANUAL", "AUTOMATIC"]).optional(),
    vehicleImages: zod_1.z.array(zod_1.z.string()).optional(),
});
//# sourceMappingURL=vehicle.schema.js.map