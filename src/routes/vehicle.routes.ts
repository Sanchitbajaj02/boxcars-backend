import { Router } from "express";
const vehicleRouter = Router();

import authenticate from "@/middlewares/authenticate";

import {
  getAllVehiclesHandler,
  getSingleVehicleHandler,
  saveVehicleHandler,
  deleteVehicleHandler,
  updateVehicleHandler,
} from "@/controllers/vehicle.controller";

vehicleRouter.get("/", getAllVehiclesHandler);

vehicleRouter.get("/:vehicleId", getSingleVehicleHandler);

vehicleRouter.post("/", authenticate, saveVehicleHandler);

vehicleRouter.delete("/:vehicleId", authenticate, deleteVehicleHandler);

vehicleRouter.put("/:vehicleId", authenticate, updateVehicleHandler);

export default vehicleRouter;
