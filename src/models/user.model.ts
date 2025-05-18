import mongoose from "mongoose";
import { hashValue, compareValue } from "@/utils/bcrypt";

export interface UserDocument extends mongoose.Document {
  fullName: string;
  email: string;
  password: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(val: string): Promise<boolean>;
  omitPassword(): Pick<UserDocument, "_id" | "email" | "isVerified" | "createdAt" | "updatedAt">;
}

const userSchema = new mongoose.Schema<UserDocument>(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await hashValue(this.password);
  next();
});

userSchema.methods.comparePassword = async function (val: string) {
  return await compareValue(val, this.password);
};

userSchema.methods.omitPassword = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;
