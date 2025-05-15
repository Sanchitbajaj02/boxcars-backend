import mongoose from "mongoose";

export interface VehicleDocument extends mongoose.Document {
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: number;
  vehiclePrice: number;
  vehicleMileage: number;
  vehicleFuelType: string;
  vehicleTransmission: "manual" | "automatic";
  vehicleImages?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const vehicleSchema = new mongoose.Schema<VehicleDocument>(
  {
    vehicleMake: {
      type: String,
      required: true,
      index: true, 
    },
    vehicleModel: {
      type: String,
      required: true,
      index: true,
    },
    vehicleYear: {
      type: Number,
      required: true,
      index: true,
    },
    vehiclePrice: {
      type: Number,
      required: true,
      min: 0,
    },
    vehicleMileage: {
      type: Number,
      min: 0,
      default: 0,
    },
    vehicleFuelType: {
      type: String,
      required: true,
      enum: ["PETROL", "DIESEL", "ELECTRIC", "HYBRID"],
    },
    vehicleTransmission: {
      type: String,
      required: true,
      enum: ["MANUAL", "AUTOMATIC"],
    },
    vehicleImages: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// Compound index for make, model, and year
vehicleSchema.index({ vehicleMake: 1, vehicleModel: 1, vehicleYear: 1 });

const VehicleModel = mongoose.model("Vehicle", vehicleSchema);

export default VehicleModel;