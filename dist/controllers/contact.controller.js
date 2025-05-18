"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveContactForm = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchErrors_1 = __importDefault(require("../utils/catchErrors"));
const appAssert_1 = __importDefault(require("../utils/appAssert"));
const contact_model_1 = __importDefault(require("../models/contact.model"));
const contact_schema_1 = require("../zodSchemas/contact.schema");
exports.saveContactForm = (0, catchErrors_1.default)(async (req, res) => {
    // validate inputs
    const parsedForm = contact_schema_1.contactSchema.parse(req.body);
    // save contact data
    const contactForm = await contact_model_1.default.create({
        name: parsedForm.name,
        email: parsedForm.email,
        phone: parsedForm.phone,
        message: parsedForm.message,
    });
    (0, appAssert_1.default)(contactForm, http_status_codes_1.StatusCodes.BAD_REQUEST, "Error in saving contact form");
    // send final response
    return res.status(http_status_codes_1.StatusCodes.CREATED).json({
        message: "Form saved successfully",
    });
});
//# sourceMappingURL=contact.controller.js.map