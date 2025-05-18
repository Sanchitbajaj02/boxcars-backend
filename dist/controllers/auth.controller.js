"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutHandler = exports.loginHandler = exports.registerHandler = void 0;
const http_status_codes_1 = require("http-status-codes");
const auth_schema_1 = require("@/zodSchemas/auth.schema");
const catchErrors_1 = __importDefault(require("@/utils/catchErrors"));
const appAssert_1 = __importDefault(require("@/utils/appAssert"));
const jwt_1 = require("@/utils/jwt");
const cookies_1 = require("@/utils/cookies");
// models
const user_model_1 = __importDefault(require("@/models/user.model"));
exports.registerHandler = (0, catchErrors_1.default)(async (req, res) => {
    // validate inputs
    const request = auth_schema_1.registerSchema.parse(req.body);
    // check whether user already exist or not?
    const checkUserExist = await user_model_1.default.exists({
        email: request.email,
    });
    (0, appAssert_1.default)(!checkUserExist, http_status_codes_1.StatusCodes.BAD_REQUEST, "User with this email already exists");
    // create new user
    const registerUser = await user_model_1.default.create({
        fullName: request.fullName,
        email: request.email,
        password: request.password,
    });
    (0, appAssert_1.default)(registerUser, http_status_codes_1.StatusCodes.BAD_REQUEST, "User can not be created");
    // send final response
    return res.status(http_status_codes_1.StatusCodes.CREATED).json({
        message: "User created successfully",
    });
});
exports.loginHandler = (0, catchErrors_1.default)(async (req, res) => {
    // validate inputs
    const request = auth_schema_1.loginSchema.parse(req.body);
    // check if the user exists or not
    const user = await user_model_1.default.findOne({
        email: request.email,
    });
    (0, appAssert_1.default)(user, http_status_codes_1.StatusCodes.UNAUTHORIZED, "Invalid email entered");
    // validate password from the request
    const isValidPassword = await user.comparePassword(request.password);
    (0, appAssert_1.default)(isValidPassword, http_status_codes_1.StatusCodes.UNAUTHORIZED, "Wrong password entered");
    // sign access token and refresh token
    const refreshToken = (0, jwt_1.signToken)({
        userId: user.id,
    }, jwt_1.refreshTokenSignOptions);
    const accessToken = (0, jwt_1.signToken)({
        userId: user.id,
    }, jwt_1.accessTokenSignOptions);
    return (0, cookies_1.setAuthCookies)({ res, accessToken, refreshToken }).status(http_status_codes_1.StatusCodes.OK).json({
        message: "Login successful",
    });
});
exports.logoutHandler = (0, catchErrors_1.default)(async (req, res) => {
    // return the response with cleared cookies
    return (0, cookies_1.clearAuthCookies)(res).status(http_status_codes_1.StatusCodes.OK).json({
        message: "Logout successful",
    });
});
// export const verifyEmailHandler = catchErrors(async (req, res) => {
//   // get verification code from params
//   const verificationCode = verificationCodeSchema.parse(req.params.code);
// });
//# sourceMappingURL=auth.controller.js.map