import express from "express";
const router = express.Router();
import { SystemUser, Ticket, OrganisationUser, Organisation } from "../models/models.mjs";
router.get("/getSystemUsers", async (req, res) => {
    try {
        const data = await SystemUser.find({});
        console.log("System users retrieved!");
        res.status(200).json(data);
    }
    catch (e) {
        console.log("Error occured retrieving system users:", e);
    }
});
router.post("/addSystemUser", async (req, res) => {
    try {
        const data = await SystemUser.create(req.body);
        res.status(200).json(data);
        console.log("New system user has been added to database!");
    }
    catch (e) {
        console.log("Error trying to add system user:", e);
    }
});
router.get("/systemUser/:id", async (req, res) => {
    try {
        const data = await SystemUser.findById(req.params.id);
        console.log("System user retrieved!");
        res.status(200).json(data);
    }
    catch (e) {
        console.log("Error occured retrieving system user:", e);
    }
});
// Organisation User Controllers
router.get("/getOrganisationUsers", async (req, res) => {
    try {
        const data = await OrganisationUser.find({});
        console.log("Organisation users retrieved!");
        res.status(200).json(data);
    }
    catch (e) {
        console.log("Error occured retrieving organisation users:", e);
    }
});
router.post("/addOrganisationUser", async (req, res) => {
    try {
        const data = await OrganisationUser.create(req.body);
        res.status(200).json(data);
        console.log("New organisation user has been added to database!");
    }
    catch (e) {
        console.log("Error trying to add organisation user:", e);
    }
});
router.get("/organisationUser/:id", async (req, res) => {
    try {
        const data = await OrganisationUser.findById(req.params.id);
        console.log("Organisation user retrieved!");
        res.status(200).json(data);
    }
    catch (e) {
        console.log("Error occured retrieving organisation user:", e);
    }
});
// Tickets Controllers
router.get("/tickets", async (req, res) => {
    try {
        const data = await Ticket.find({ reporter: { $in: OrganisationUser.find({ organisation: req.params.org_name }).select('_id') } });
        console.log("Ticket details retrieved!");
        res.status(200).json(data);
    }
    catch (e) {
        console.log("Error occured retrieving ticket details:", e);
    }
});
router.get("/ticket/:id", async (req, res) => {
    try {
        const data = await SystemUser.findById(req.params.id);
        console.log("Ticket details retrieved!");
        res.status(200).json(data);
    }
    catch (e) {
        console.log("Error occured retrieving ticket details:", e);
    }
});
router.post("/ticket", async (req, res) => {
    try {
        const data = await Ticket.create(req.body);
        res.status(200).json(data);
        console.log("New system user has been added to database!");
    }
    catch (e) {
        console.log("Error trying to add system user:", e);
    }
});
// Organisation controls
router.get("/organisation", async (req, res) => {
    try {
        const data = await Organisation.find({});
        res.status(200).json(data);
        console.log("Organisation data retrieved!");
    }
    catch (e) {
        console.log("Cant get organisations:", e);
    }
});
router.post("/organisation", async (req, res) => {
    try {
        const data = await Organisation.create(req.body);
        res.status(200).json(data);
        console.log("New organisation created!");
    }
    catch (e) {
        console.log("Couldnt create organisation:", e);
    }
});
export { router };
//# sourceMappingURL=systemUser.router.mjs.map