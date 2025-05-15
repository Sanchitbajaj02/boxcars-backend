import { Router } from "express";
const vehicleRouter = Router();

import {
  getAllVehiclesHandler,
  getSingleVehicleHandler,
  saveVehicleHandler,
  deleteVehicleHandler,
} from "@/controllers/vehicle.controller";

vehicleRouter.get("/", getAllVehiclesHandler);

vehicleRouter.get("/:vehicleId", getSingleVehicleHandler);

vehicleRouter.post("/", saveVehicleHandler);

// vehicleRouter.put("/vehicle");

vehicleRouter.delete("/:vehicleId", deleteVehicleHandler);

export default vehicleRouter;
