import express from "express"
const router = express.Router()

import { getTickets, getOrgTickets } from "../controllers/ticketController.mjs"

router
  .route("/")
  .get(getTickets)

router
  .route("/organisation/:id")
  .get(getOrgTickets)

export default router