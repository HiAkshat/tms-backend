import express from "express";
const router = express.Router();

import {getSystemUser, getSystemUsers, addSystemUser} from "../controllers/systemUserController.mjs"

router
  .route("/")
  .get(getSystemUsers)
  .post(addSystemUser);

router
  .route("/:id")
  .get(getSystemUser)

export default router