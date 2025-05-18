import { StatusCodes } from "http-status-codes";
import catchErrors from "@/utils/catchErrors";
import appAssert from "@/utils/appAssert";

import VehicleModel from "@/models/vehicle.model";

import { vehicleIdSchema, vehicleSchema } from "@/zodSchemas/vehicle.schema";

export const getAllVehiclesHandler = catchErrors(async (req, res) => {
  // fetch all vehicles
  const vehicles = await VehicleModel.find();

  // send final response
  return res.status(StatusCodes.OK).json({
    message: "Get all vehicles information",
    data: vehicles,
  });
});

export const getSingleVehicleHandler = catchErrors(async (req, res) => {
  // save vehicleId in a variable
  const vehicleId = req.params.vehicleId;

  // validate inputs
  const parsedVehicleId = vehicleIdSchema.parse(vehicleId);

  // fetch single record based on vehicleId
  const vehicleData = await VehicleModel.findById(parsedVehicleId);

  // send final response
  return res.status(StatusCodes.OK).json({
    message: "Get single vehicle information",
    data: vehicleData,
  });
});

export const saveVehicleHandler = catchErrors(async (req, res) => {
  // validate inputs
  const request = vehicleSchema.parse(req.body);

  // save vehicle data
  const vehicle = await VehicleModel.create({
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

  appAssert(vehicle, StatusCodes.BAD_REQUEST, "Error in saving vehicle");

  // send final response
  return res.status(StatusCodes.CREATED).json({
    message: "Vehicle information created successfully",
  });
});

export const deleteVehicleHandler = catchErrors(async (req, res) => {
  // save vehicleId in a variable
  const vehicleId = req.params.vehicleId;

  // validate inputs
  const parsedVehicleId = vehicleIdSchema.parse(vehicleId);

  // find whether this id exists or not
  const vehicleExist = await VehicleModel.exists({
    _id: parsedVehicleId,
  });

  appAssert(vehicleExist, StatusCodes.FORBIDDEN, "Vehicle does not exist in the system");

  await VehicleModel.deleteOne({
    _id: parsedVehicleId,
  });

  // send final response
  return res.status(StatusCodes.OK).json({
    message: "Vehicle information deleted successfully",
  });
});

export const updateVehicleHandler = catchErrors(async (req, res) => {
  // save vehicleId in a variable
  const vehicleId = req.params.vehicleId;

  // validate inputs
  const parsedVehicleId = vehicleIdSchema.parse(vehicleId);

  const request = vehicleSchema.parse(req.body);

  // find whether this id exists or not
  const vehicleExist = await VehicleModel.exists({
    _id: parsedVehicleId,
  });

  appAssert(vehicleExist, StatusCodes.FORBIDDEN, "Vehicle does not exist in the system");

  // update vehicle information
  const updatedVehicle = await VehicleModel.findOneAndUpdate(
    {
      _id: vehicleId,
    },
    {
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
    },
    {
      new: true,
    }
  );

  appAssert(updatedVehicle, StatusCodes.BAD_REQUEST, "Error in updating vehicle information");

  // send final response
  return res.status(StatusCodes.OK).json({
    message: "Vehicle information updated successfully",
    data: updatedVehicle,
  });
});
