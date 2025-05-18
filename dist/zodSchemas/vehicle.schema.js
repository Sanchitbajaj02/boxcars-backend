"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleSchema = exports.vehicleIdSchema = void 0;
const zod_1 = require("zod");
exports.vehicleIdSchema = zod_1.z.string();
exports.vehicleSchema = zod_1.z.object({
    listingTitle: zod_1.z.string().min(1),
    category: zod_1.z.string().min(1),
    condition: zod_1.z.string().min(1),
    type: zod_1.z.string().min(1),
    make: zod_1.z.string().min(1),
    model: zod_1.z.string().min(1),
    year: zod_1.z.number().int().gte(1900), // first car invented in 1886
    offerType: zod_1.z.string().min(1),
    driveType: zod_1.z.string().min(1),
    transmission: zod_1.z.enum(["manual", "automatic"]),
    fuelType: zod_1.z.enum(["petrol", "diesel", "electric", "hybrid"]),
    mileage: zod_1.z.number().int().min(0),
    engineSize: zod_1.z.number().min(0),
    cylinder: zod_1.z.number().int().min(1),
    color: zod_1.z.string().min(1),
    door: zod_1.z.number().int().min(1),
    vin: zod_1.z.string().min(1),
    listingDescription: zod_1.z.string().min(1),
    price: zod_1.z.number().min(0),
    description: zod_1.z.string().min(1),
    features: zod_1.z.array(zod_1.z.string()),
    images: zod_1.z.array(zod_1.z.string()),
    location: zod_1.z.string(),
});
//# sourceMappingURL=vehicle.schema.js.map