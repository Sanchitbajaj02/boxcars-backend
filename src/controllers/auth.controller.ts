import { StatusCodes } from "http-status-codes";
import { registerSchema, loginSchema } from "@/zodSchemas/auth.schemas";
import catchErrors from "@/utils/catchErrors";
import appAssert from "@/utils/appAssert";
import createPasswordGenerator from "@/utils/createPassword";

import { hashValue, compareValue } from "@/utils/bcrypt";
import { refreshTokenSignOptions, signToken, accessTokenSignOptions, verifyToken } from "@/utils/jwt";
import { clearAuthCookies, setAuthCookies } from "@/utils/cookies";

// models
import UserModel from "@/models/user.model";

export const registerHandler = catchErrors(async (req, res) => {
  // validate inputs
  const request = registerSchema.parse({ ...req.body });

  // check whether user already exist or not?
  const checkUserExist = await UserModel.exists({
    email: request.email,
  });

  appAssert(checkUserExist, StatusCodes.BAD_REQUEST, "User with this email already exists");

  // hash password
  const hashedPassword = await hashValue(request.password);

  // create new user
  const registerUser = await UserModel.create({
    fullName: request.fullName,
    email: request.email,
    password: hashedPassword,
  });

  appAssert(registerUser, StatusCodes.BAD_REQUEST, "User can not be created");

  // send final response
  return res.status(StatusCodes.CREATED).json({
    message: "User created successfully",
  });
});

export const loginHandler = catchErrors(async (req, res) => {
  // validate inputs
  const request = loginSchema.parse({
    ...req.body,
  });

  // check if the user exists or not
  const user = await UserModel.findOne({
    email: request.email,
  });

  appAssert(user, StatusCodes.UNAUTHORIZED, "Invalid loginId entered");

  // compare the password
  const isValidPassword = await compareValue(request.password, user.password);

  appAssert(isValidPassword, StatusCodes.UNAUTHORIZED, "Wrong password entered");

  // sign access token and refresh token
  const refreshToken = signToken(
    {
      userId: user.id,
    },
    refreshTokenSignOptions
  );

  const accessToken = signToken(
    {
      userId: user.id,
    },
    accessTokenSignOptions
  );

  return setAuthCookies({ res, accessToken, refreshToken }).status(StatusCodes.OK).json({
    message: "Login successful",
  });
});

// export const verifyEmailHandler = catchErrors(async (req, res) => {
//   // get verification code from params
//   const verificationCode = verificationCodeSchema.parse(req.params.code);
// });
