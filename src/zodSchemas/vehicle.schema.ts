import { z } from "zod";

export const vehicleIdSchema = z.string();

export const vehicleSchema = z.object({
  listingTitle: z.string().min(1),
  category: z.string().min(1),
  condition: z.string().min(1),
  type: z.string().min(1),
  make: z.string().min(1),
  model: z.string().min(1),
  year: z.number().int().gte(1900), // first car invented in 1886
  offerType: z.string().min(1),
  driveType: z.string().min(1),
  transmission: z.enum(["manual", "automatic"]),
  fuelType: z.enum(["petrol", "diesel", "electric", "hybrid"]),
  mileage: z.number().int().min(0),
  engineSize: z.number().min(0),
  cylinder: z.number().int().min(1),
  color: z.string().min(1),
  door: z.number().int().min(1),
  vin: z.string().min(1),
  listingDescription: z.string().min(1),
  price: z.number().min(0),
  description: z.string().min(1),
  features: z.array(z.string()),
  images: z.array(z.string()),
  location: z.string(),
});
