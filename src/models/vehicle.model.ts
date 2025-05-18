import mongoose from "mongoose";

export interface VehicleDocument extends mongoose.Document {
  listingTitle: string;
  category: string;
  condition: string;
  type: string;
  make: string;
  vehicleModel: string;
  year: number;
  offerType: string;
  driveType: string;
  transmission: string;
  fuelType: string;
  mileage: number;
  engineSize: number;
  cylinder: number;
  color: string;
  door: number;
  vin: string;
  listingDescription: string;
  price: number;
  description: string;
  features: string[];
  images: string[];
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

const vehicleSchema = new mongoose.Schema<VehicleDocument>(
  {
    listingTitle: { type: String, required: true },
    category: { type: String, required: true },
    condition: { type: String, required: true },
    type: { type: String, required: true },
    make: { type: String, required: true, index: true },
    vehicleModel: { type: String, required: true, index: true },
    year: { type: Number, required: true, index: true },
    offerType: { type: String, required: true },
    driveType: { type: String, required: true },
    transmission: { type: String, required: true, enum: ["manual", "automatic"] },
    fuelType: { type: String, required: true, enum: ["petrol", "diesel", "electric", "hybrid"] },
    mileage: { type: Number, min: 0, default: 0 },
    engineSize: { type: Number, required: true },
    cylinder: { type: Number, required: true },
    color: { type: String, required: true },
    door: { type: Number, required: true },
    vin: { type: String, required: true },
    listingDescription: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, required: true },
    features: { type: [String], default: [] },
    images: { type: [String], default: [] },
    location: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

vehicleSchema.index({ make: 1, model: 1, year: 1 });

const VehicleModel = mongoose.model("Vehicle", vehicleSchema);

export default VehicleModel;
