"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRouter = (0, express_1.Router)();
const auth_controller_1 = require("../controllers/auth.controller");
authRouter.post("/register", auth_controller_1.registerHandler);
authRouter.post("/login", auth_controller_1.loginHandler);
authRouter.post("/logout", auth_controller_1.logoutHandler);
exports.default = authRouter;
//# sourceMappingURL=auth.routes.js.map