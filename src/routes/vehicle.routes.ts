import { Router } from "express";
const vehicleRouter = Router();

import { getAllVehiclesHandler, getSingleVehicleHandler } from "@/controllers/vehicle.controller";

vehicleRouter.get("/", getAllVehiclesHandler);

vehicleRouter.get("/:vehicleId", getSingleVehicleHandler);

vehicleRouter.post("/vehicle");

// vehicleRouter.put("/vehicle");

// vehicleRouter.delete("/vehicle");

export default vehicleRouter;
