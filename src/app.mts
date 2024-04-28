import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv'; 
import mongoose from "mongoose";

dotenv.config()
console.log(process.env.MONGO_URL)

import { router as systemUserRouter } from "./routes/systemUser.router.mjs";
import organisationRouter from "./routes/organisationRoutes.mjs"
import organisationUserRouter from "./routes/organisationUserRoutes.mjs"

// connect to MONGODB database
const MongoDB_Connection_String = process.env.MONGO_URL ?? ""

async function connectToMongoDB(connectionString: string) {
  await mongoose.connect(connectionString);
  console.log("Connect to MongoDB Database!");
}

try {
  await connectToMongoDB(MongoDB_Connection_String);
} catch (e) {
  console.log("Error connecting to MongoDB: ", e);
}

const PORT = 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

app.use("/api", systemUserRouter)
app.use("/api/organisation", organisationRouter)
app.use("/api/organisationUser", organisationUserRouter)

app.get("/", (req: Request, res: any) => {
  res.status(200).send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
