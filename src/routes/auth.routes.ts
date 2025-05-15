import { Router } from "express";
const authRouter = Router();

import { registerHandler, loginHandler } from "../controllers/auth.controller";

authRouter.post("/register", registerHandler);
authRouter.post("/login", loginHandler);

export default authRouter;
