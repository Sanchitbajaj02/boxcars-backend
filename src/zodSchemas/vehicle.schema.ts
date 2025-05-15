import { z } from "zod";

const currentYear = new Date().getFullYear() + 1;

const yearSchema = z.number().int().gte(1900).lte(currentYear);

export const vehicleIdSchema = z.string();

export const vehicleSchema = z.object({
  vehicleMake: z.string(),
  vehicleModel: z.string(),
  vehicleYear: yearSchema,
  vehiclePrice: z.number().min(0),
  vehicleMileage: z.number().min(0).optional(),
  vehicleFuelType: z.enum(["PETROL", "DIESEL", "ELECTRIC", "HYBRID"]),
  vehicleTransmission: z.enum(["MANUAL", "AUTOMATIC"]).optional(),
  vehicleImages: z.array(z.string()).optional(),
});
