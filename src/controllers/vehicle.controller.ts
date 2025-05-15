import { StatusCodes } from "http-status-codes";
import catchErrors from "@/utils/catchErrors";
import appAssert from "@/utils/appAssert";

import VehicleModel from "@/models/vehicle.model";

import { vehicleIdSchema, vehicleSchema } from "@/zodSchemas/vehicle.schema";

export const getAllVehiclesHandler = catchErrors(async (req, res) => {
  // fetch all vehicles

  const vehicles = await VehicleModel.find();

  return res.status(StatusCodes.OK).json({
    message: "Get all vehicles",
    data: vehicles,
  });
});

export const getSingleVehicleHandler = catchErrors(async (req, res) => {
  const vehicleId = req.params.vehicleId;

  const request = vehicleIdSchema.parse(vehicleId);

  console.log("request:", request);

  // const vehicle = await VehicleModel.findById()
  return res.status(StatusCodes.OK).json({
    message: "Get single vehicle",
  });
});
