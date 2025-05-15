import { StatusCodes } from "http-status-codes";
import AppErrorCode from "../constants/appErrorCode";

class AppError extends Error {
  constructor(
    public statusCode: StatusCodes,
    public message: string,
    public errorCode?: AppErrorCode
  ) {
    super(message);
  }
}

// new AppError(StatusCodes.BAD_REQUEST, "Invalid email", AppErrorCode.InvalidAccessToken);

export default AppError;
