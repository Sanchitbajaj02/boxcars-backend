import { Router } from "express";
const vehicleRouter = Router();

import authenticate from "@/middlewares/authenticate";

import {
  getAllVehiclesHandler,
  getSingleVehicleHandler,
  saveVehicleHandler,
  deleteVehicleHandler,
} from "@/controllers/vehicle.controller";

vehicleRouter.get("/", getAllVehiclesHandler);

vehicleRouter.get("/:vehicleId", getSingleVehicleHandler);

vehicleRouter.post("/", authenticate, saveVehicleHandler);

// vehicleRouter.put("/vehicle");

vehicleRouter.delete("/:vehicleId", authenticate, deleteVehicleHandler);

export default vehicleRouter;
