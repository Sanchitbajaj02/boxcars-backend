import { StatusCodes } from "http-status-codes";
import assert from "node:assert";
import AppErrorCode from "@/constants/appErrorCode";
import AppError from "@/utils/AppError";

export type AppAssertParams = (
  condition: any,
  httpStatusCode: StatusCodes,
  message: string,
  appErrorCode?: AppErrorCode
) => asserts condition;

/**
 * Asserts a condition and throws an AppError if the condition is falsy
 */
const appAssert: AppAssertParams = (condition, httpStatusCode, message, appErrorCode) => {
  return assert(condition, new AppError(httpStatusCode, message, appErrorCode));
};

export default appAssert;
