import express from "express";
const router = express.Router();

import { addTicketHistory, getTicketHistory } from "../controllers/ticketHistoryController.mjs";

router
  .route("/")
  .post(addTicketHistory)

router
  .route("/:id")
  .get(getTicketHistory)

export default router