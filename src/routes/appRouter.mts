import express from "express";
const router = express.Router();

import verifyToken from "../services/verifyToken.mjs";

router
  .route("/verifyToken")
  .post(verifyToken)

export default router