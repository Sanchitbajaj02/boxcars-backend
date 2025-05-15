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

  const parsedVehicleId = vehicleIdSchema.parse(vehicleId);

  const vehicleData = await VehicleModel.findById(parsedVehicleId)

  // const vehicle = await VehicleModel.findById()
  return res.status(StatusCodes.OK).json({
    message: "Get single vehicle",
    data: vehicleData
  });
});

export const saveVehicleHandler = catchErrors(async (req, res) => {
  const request = vehicleSchema.parse(req.body);

  const vehicle = await VehicleModel.create({
    vehicleMake: request.vehicleMake,
    vehicleModel: request.vehicleModel,
    vehicleYear: request.vehicleYear,
    vehiclePrice: request.vehiclePrice,
    vehicleMileage: request.vehicleMileage,
    vehicleFuelType: request.vehicleFuelType,
    vehicleTransmission: request.vehicleTransmission,
  });

  appAssert(vehicle, StatusCodes.BAD_REQUEST, "Error in saving vehicle");

  return res.status(StatusCodes.CREATED).json({
    message: "Vehicle created successfully",
  });
});

export const deleteVehicleHandler = catchErrors(async (req, res) => {
  const vehicleId = req.params.vehicleId;

  const parsedVehicleId = vehicleIdSchema.parse(vehicleId);

  const vehicleExist = await VehicleModel.exists({
    _id: parsedVehicleId,
  });

  appAssert(vehicleExist, StatusCodes.FORBIDDEN, "Vehicle does not exist in the system");

  await VehicleModel.deleteOne({
    _id: parsedVehicleId,
  });

  return res.status(StatusCodes.OK).json({
    message: "Vehicle deleted successfully",
  });
});
