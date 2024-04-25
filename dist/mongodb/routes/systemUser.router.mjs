import express from "express";
const router = express.Router();
import { SystemUser } from "../models/models.mjs";
router.get("/getSystemUsers", async (req, res) => {
    try {
        const data = await SystemUser.find({});
        console.log("Students retrieved!");
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
        console.log("Students retrieved!");
        res.status(200).json(data);
    }
    catch (e) {
        console.log("Error occured retrieving system user:", e);
    }
});
export { router };
//# sourceMappingURL=systemUser.router.mjs.map