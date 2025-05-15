import { Router } from "express";
const contactRouter = Router();

import { saveContactForm } from "@/controllers/contact.controller";

contactRouter.post("/", saveContactForm);

export default contactRouter;
