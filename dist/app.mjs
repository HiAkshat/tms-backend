import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { router as systemUserRouter } from "./mongodb/routes/systemUser.router.mjs";
dotenv.config();
// connect to MONGODB database
const MongoDB_Connection_String = `mongodb+srv://akshat:net123@tmscluster.ilzrhhb.mongodb.net/?retryWrites=true&w=majority&appName=TmsCluster`;
async function connectToMongoDB(connectionString) {
    await mongoose.connect(connectionString);
    console.log("Connect to MongoDB Database!");
}
try {
    await connectToMongoDB(MongoDB_Connection_String);
}
catch (e) {
    console.log("Error connecting to MongoDB: ", e);
}
const PORT = 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use("/api", systemUserRouter);
app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
//# sourceMappingURL=app.mjs.map