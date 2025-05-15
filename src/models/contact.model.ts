import mongoose from "mongoose";

export interface ContactDocument extends mongoose.Document {
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const contactSchema = new mongoose.Schema<ContactDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ContactModel = mongoose.model("Contact", contactSchema);

export default ContactModel;
