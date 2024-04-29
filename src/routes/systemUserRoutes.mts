import express from "express";
const router = express.Router();

import {getSystemUser, getSystemUsers, addSystemUser, sendOTP, getSystemUserByEmail} from "../controllers/systemUserController.mjs"

router
  .route("/")
  .get(getSystemUsers)
  .post(addSystemUser);

router
  .route("/:id")
  .get(getSystemUser)

router
  .route("/email/:email_id")
  .get(getSystemUserByEmail)

router
  .route("/sendOTP")
  .post(sendOTP)

export default router