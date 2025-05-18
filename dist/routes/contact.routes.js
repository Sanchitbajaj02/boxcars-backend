"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactRouter = (0, express_1.Router)();
const contact_controller_1 = require("@/controllers/contact.controller");
contactRouter.post("/", contact_controller_1.saveContactForm);
exports.default = contactRouter;
//# sourceMappingURL=contact.routes.js.map