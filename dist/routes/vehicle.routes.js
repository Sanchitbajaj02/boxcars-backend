"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehicleRouter = (0, express_1.Router)();
const authenticate_1 = __importDefault(require("@/middlewares/authenticate"));
const vehicle_controller_1 = require("@/controllers/vehicle.controller");
vehicleRouter.get("/", vehicle_controller_1.getAllVehiclesHandler);
vehicleRouter.get("/:vehicleId", vehicle_controller_1.getSingleVehicleHandler);
vehicleRouter.post("/", authenticate_1.default, vehicle_controller_1.saveVehicleHandler);
vehicleRouter.delete("/:vehicleId", authenticate_1.default, vehicle_controller_1.deleteVehicleHandler);
vehicleRouter.put("/:vehicleId", authenticate_1.default, vehicle_controller_1.updateVehicleHandler);
exports.default = vehicleRouter;
//# sourceMappingURL=vehicle.routes.js.map