import { Router } from "express";
const authRouter = Router();

import { registerHandler, loginHandler, logoutHandler } from "../controllers/auth.controller";

authRouter.post("/register", registerHandler);
authRouter.post("/login", loginHandler);
authRouter.post("/logout", logoutHandler);

export default authRouter;
