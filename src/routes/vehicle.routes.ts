import { Router } from "express";
const vehicleRouter = Router();

import { getAllVehiclesHandler, getSingleVehicleHandler } from "@/controllers/vehicle.controller";

vehicleRouter.get("/vehicles", getAllVehiclesHandler);

vehicleRouter.get("/vehicle/:vehicleId", getSingleVehicleHandler);

// vehicleRouter.post("/vehicle");

// vehicleRouter.put("/vehicle");

// vehicleRouter.delete("/vehicle");

export default vehicleRouter;
