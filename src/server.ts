import "dotenv/config";
import express from "express";
import { connectToDatabase } from "@/configs/db";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import errorHandler from "@/middlewares/errorHandler";
import { FRONTEND_URL, NODE_ENV, PORT } from "@/constants/env";

// Routes
import authRouter from "@/routes/auth.routes";
import vehicleRouter from "./routes/vehicle.routes";

const app = express();

app.set("trust proxy", true);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/vehicle", vehicleRouter)

// This must be the last route
app.use((req: any, res: any) => {
  res.status(404).send("Route not found. This is the fallback handler.");
});

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server running on ${PORT} in ${NODE_ENV} environment`);

  await connectToDatabase();
});
