import { RequestHandler } from "express";
import appAssert from "@/utils/appAssert";
import { StatusCodes } from "http-status-codes";
import AppErrorCode from "@/constants/appErrorCode";
import { verifyToken } from "@/utils/jwt";

const authenticate: RequestHandler = (req, res, next) => {
  // get access token from cookies
  const accessToken = req.cookies.accessToken as string | undefined;

  appAssert(
    accessToken,
    StatusCodes.UNAUTHORIZED,
    "Not Authorized",
    AppErrorCode.InvalidAccessToken
  );

  // verify a ccess token
  const { error, payload } = verifyToken(accessToken);

  appAssert(
    payload,
    StatusCodes.UNAUTHORIZED,
    error?.toLowerCase() === "jwt expired" ? "Token Expired" : "Invalid Token",
    AppErrorCode.InvalidAccessToken
  );

  req.userId = payload?.userId;
  
  next();
};

export default authenticate;
