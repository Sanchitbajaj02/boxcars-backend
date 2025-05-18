"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVehicleHandler = exports.deleteVehicleHandler = exports.saveVehicleHandler = exports.getSingleVehicleHandler = exports.getAllVehiclesHandler = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchErrors_1 = __importDefault(require("../utils/catchErrors"));
const appAssert_1 = __importDefault(require("../utils/appAssert"));
const vehicle_model_1 = __importDefault(require("../models/vehicle.model"));
const vehicle_schema_1 = require("../zodSchemas/vehicle.schema");
exports.getAllVehiclesHandler = (0, catchErrors_1.default)(async (req, res) => {
    // fetch all vehicles
    const vehicles = await vehicle_model_1.default.find();
    // send final response
    return res.status(http_status_codes_1.StatusCodes.OK).json({
        message: "Get all vehicles information",
        data: vehicles,
    });
});
exports.getSingleVehicleHandler = (0, catchErrors_1.default)(async (req, res) => {
    // save vehicleId in a variable
    const vehicleId = req.params.vehicleId;
    // validate inputs
    const parsedVehicleId = vehicle_schema_1.vehicleIdSchema.parse(vehicleId);
    // fetch single record based on vehicleId
    const vehicleData = await vehicle_model_1.default.findById(parsedVehicleId);
    // send final response
    return res.status(http_status_codes_1.StatusCodes.OK).json({
        message: "Get single vehicle information",
        data: vehicleData,
    });
});
exports.saveVehicleHandler = (0, catchErrors_1.default)(async (req, res) => {
    // validate inputs
    const request = vehicle_schema_1.vehicleSchema.parse(req.body);
    // save vehicle data
    const vehicle = await vehicle_model_1.default.create({
        listingTitle: request.listingTitle,
        category: request.category,
        condition: request.condition,
        type: request.type,
        make: request.make,
        vehicleModel: request.model,
        year: request.year,
        offerType: request.offerType,
        driveType: request.driveType,
        transmission: request.transmission,
        fuelType: request.fuelType,
        mileage: request.mileage,
        engineSize: request.engineSize,
        cylinder: request.cylinder,
        color: request.color,
        door: request.door,
        vin: request.vin,
        listingDescription: request.listingDescription,
        price: request.price,
        description: request.description,
        features: request.features,
        images: request.images,
        location: request.location,
    });
    (0, appAssert_1.default)(vehicle, http_status_codes_1.StatusCodes.BAD_REQUEST, "Error in saving vehicle");
    // send final response
    return res.status(http_status_codes_1.StatusCodes.CREATED).json({
        message: "Vehicle information created successfully",
    });
});
exports.deleteVehicleHandler = (0, catchErrors_1.default)(async (req, res) => {
    // save vehicleId in a variable
    const vehicleId = req.params.vehicleId;
    // validate inputs
    const parsedVehicleId = vehicle_schema_1.vehicleIdSchema.parse(vehicleId);
    // find whether this id exists or not
    const vehicleExist = await vehicle_model_1.default.exists({
        _id: parsedVehicleId,
    });
    (0, appAssert_1.default)(vehicleExist, http_status_codes_1.StatusCodes.FORBIDDEN, "Vehicle does not exist in the system");
    await vehicle_model_1.default.deleteOne({
        _id: parsedVehicleId,
    });
    // send final response
    return res.status(http_status_codes_1.StatusCodes.OK).json({
        message: "Vehicle information deleted successfully",
    });
});
exports.updateVehicleHandler = (0, catchErrors_1.default)(async (req, res) => {
    // save vehicleId in a variable
    const vehicleId = req.params.vehicleId;
    // validate inputs
    const parsedVehicleId = vehicle_schema_1.vehicleIdSchema.parse(vehicleId);
    const request = vehicle_schema_1.vehicleSchema.parse(req.body);
    // find whether this id exists or not
    const vehicleExist = await vehicle_model_1.default.exists({
        _id: parsedVehicleId,
    });
    (0, appAssert_1.default)(vehicleExist, http_status_codes_1.StatusCodes.FORBIDDEN, "Vehicle does not exist in the system");
    // update vehicle information
    const updatedVehicle = await vehicle_model_1.default.findOneAndUpdate({
        _id: vehicleId,
    }, {
        listingTitle: request.listingTitle,
        category: request.category,
        condition: request.condition,
        type: request.type,
        make: request.make,
        vehicleModel: request.model,
        year: request.year,
        offerType: request.offerType,
        driveType: request.driveType,
        transmission: request.transmission,
        fuelType: request.fuelType,
        mileage: request.mileage,
        engineSize: request.engineSize,
        cylinder: request.cylinder,
        color: request.color,
        door: request.door,
        vin: request.vin,
        listingDescription: request.listingDescription,
        price: request.price,
        description: request.description,
        features: request.features,
        images: request.images,
        location: request.location,
    }, {
        new: true,
    });
    (0, appAssert_1.default)(updatedVehicle, http_status_codes_1.StatusCodes.BAD_REQUEST, "Error in updating vehicle information");
    // send final response
    return res.status(http_status_codes_1.StatusCodes.OK).json({
        message: "Vehicle information updated successfully",
        data: updatedVehicle,
    });
});
//# sourceMappingURL=vehicle.controller.js.map