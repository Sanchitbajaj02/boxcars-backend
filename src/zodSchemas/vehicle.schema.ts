import { z } from "zod";

export const vehicleIdSchema = z.string();

export const vehicleSchema = z.object({
  vehicleMake: z.string(),
  vehicleModel: z.string(),
  vehicleYear: z.string(),
  vehiclePrice: z.string(),
  vehicleMileage: z.string().optional(),
  vehicleFuelType: z.enum(["PETROL", "DIESEL", "ELECTRIC", "HYBRID"]),
  vehicleTransmission: z.enum(["MANUAL", "AUTOMATIC"]).optional(),
  vehicleImages: z.string(),
});
