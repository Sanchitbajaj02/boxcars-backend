"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const vehicleSchema = new mongoose_1.default.Schema({
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
}, {
    timestamps: true,
});
// Compound index for make, model, and year
vehicleSchema.index({ vehicleMake: 1, vehicleModel: 1, vehicleYear: 1 });
const VehicleModel = mongoose_1.default.model("Vehicle", vehicleSchema);
exports.default = VehicleModel;
//# sourceMappingURL=vehicle.model.js.map