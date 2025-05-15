import { ErrorRequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";
import AppError from "../utils/AppError";

const handleZodErrors = (res: Response, error: ZodError) => {
  const errors = error.issues.map((issue) => ({
    path: issue.path.join("."),
    message: issue.message,
  }));

  return res.status(StatusCodes.BAD_REQUEST).json({
    message: error.message,
    errors: errors,
  });
};

const handleAppError = (res: Response, error: AppError) => {
  return res.status(error.statusCode).json({
    message: error.message,
    errorCode: error.errorCode,
  });
};

const errorHandler: ErrorRequestHandler = (error, req, res, _next) => {
  console.log(`PATH ${req.path}`, error);

  if (error instanceof ZodError) {
    handleZodErrors(res, error);
    return;
  }

  if (error instanceof AppError) {
    handleAppError(res, error);
    return;
  }

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Internal server error");
};

export default errorHandler;
