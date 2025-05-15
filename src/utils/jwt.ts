import jwt, { SignOptions, VerifyOptions } from "jsonwebtoken";
import { JWT_REFRESH_SECRET, JWT_SECRET } from "@/constants/env";
import { UserDocument } from "@/models/user.model";
import mongoose from "mongoose";

// refresh token payload = 30 days
export type RefreshTokenPayload = {
  userId: UserDocument["_id"] | mongoose.Types.ObjectId;
};

// access token payload = 1 day
export type AccessTokenPayload = {
  userId: UserDocument["_id"] | mongoose.Types.ObjectId;
};

export type SignOptionsAndSecret = SignOptions & { secret: string };

export type SignTokenParam = (
  payload: AccessTokenPayload | RefreshTokenPayload,
  options?: SignOptionsAndSecret
) => string;

const defaults: SignOptions = {
  audience: ["user"],
};

export const accessTokenSignOptions: SignOptionsAndSecret = {
  secret: JWT_SECRET,
  expiresIn: "1d",
};

export const refreshTokenSignOptions: SignOptionsAndSecret = {
  secret: JWT_REFRESH_SECRET,
  expiresIn: "30d",
};

export const signToken: SignTokenParam = (payload, options) => {
  const { secret, ...signOpts } = options || accessTokenSignOptions;

  return jwt.sign(payload, secret, { ...defaults, ...signOpts });
};

export const verifyToken = <TPayload extends object = AccessTokenPayload>(
  token: string,
  options?: VerifyOptions & { secret: string }
) => {
  const { secret = JWT_SECRET, ...verifyOpts } = options || {};

  try {
    const payload = jwt.verify(token, secret, {
      ...defaults,
      ...verifyOpts,
    }) as TPayload;

    return {
      payload,
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};
