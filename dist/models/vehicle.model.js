"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const vehicleSchema = new mongoose_1.default.Schema({
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
}, {
    timestamps: true,
});
vehicleSchema.index({ make: 1, model: 1, year: 1 });
const VehicleModel = mongoose_1.default.model("Vehicle", vehicleSchema);
exports.default = VehicleModel;
//# sourceMappingURL=vehicle.model.js.map