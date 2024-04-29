import express from "express"
const router = express.Router()

import { SystemUser } from "../models/systemUserModel.mjs"
import { Ticket } from "../models/ticketModel.mjs"
import { OrganisationUser } from "../models/organisationUserModel.mjs"

router.get("/getSystemUsers", async (req, res) => {
  try {
    const data = await SystemUser.find({})
    console.log("System users retrieved!")
    res.status(200).json(data)    
  } catch (e) {
    console.log("Error occured retrieving system users:", e)
  }
})

router.post("/addSystemUser", async (req, res) => {
  try {
    const data = await SystemUser.create(req.body)
    res.status(200).json(data)
    console.log("New system user has been added to database!")
  } catch (e) {
    console.log("Error trying to add system user:", e)
  }
})

router.get("/systemUser/:email", async (req, res) => {
  try {
    const data = await SystemUser.find({email_id: req.params.email})
    console.log("System user retrieved!")
    res.status(200).json(data)    
  } catch (e) {
    console.log("Error occured retrieving system user:", e)
  }
})

// Tickets Controllers

router.get("/tickets", async (req: any, res) => {
  try {
    const data = await Ticket.find({ 'assignee.organisation_name': req.params.org_name }).populate('assignee')
    // const data = await Ticket.find({ reporter: { $in: OrganisationUser.findById(req.params.id).select('_id') } })
    console.log("Ticket details retrieved!")
    res.status(200).json(data)
  } catch (e) {
    res.status(404).json({error: e})
    console.log("Error occured retrieving ticket details:", e)
  }
})

router.get("/ticket/:id", async (req, res) => {
  try {
    const data = await SystemUser.findById(req.params.id)
    console.log("Ticket details retrieved!")
    res.status(200).json(data)
  } catch (e) {
    console.log("Error occured retrieving ticket details:", e)
  }
})

router.post("/ticket", async (req, res) => {
  try {
    const data = await Ticket.create(req.body)
    res.status(200).json(data)
    console.log("New system user has been added to database!")
  } catch (e) {
    console.log("Error trying to add system user:", e)
  }
})

export {router}