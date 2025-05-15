import mongoose from "mongoose";
import { MONGO_URI, DB_NAME } from "@/constants/env";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: DB_NAME,
    });
    console.log("Successfully connected to DB");
  } catch (error) {
    // throw error;
    process.exit(1);
  }
};
