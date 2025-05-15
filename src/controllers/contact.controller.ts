import { StatusCodes } from "http-status-codes";
import catchErrors from "@/utils/catchErrors";
import appAssert from "@/utils/appAssert";

import ContactModel from "@/models/contact.model";

import { contactSchema } from "@/zodSchemas/contact.schema";

export const saveContactForm = catchErrors(async (req, res) => {
  // validate inputs
  const parsedForm = contactSchema.parse(req.body);

  // save contact data
  const contactForm = await ContactModel.create({
    name: parsedForm.name,
    email: parsedForm.email,
    phone: parsedForm.phone,
    message: parsedForm.message,
  });

  appAssert(contactForm, StatusCodes.BAD_REQUEST, "Error in saving contact form");

  // send final response
  return res.status(StatusCodes.CREATED).json({
    message: "Form saved successfully",
  });
});
