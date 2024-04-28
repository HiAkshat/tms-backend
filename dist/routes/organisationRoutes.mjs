import express from "express";
const router = express.Router();
import { getOrganisations, addOrganisation, editOrganisation, deleteOrganisation, } from "../controllers/organisationController.mjs";
router
    .route("/")
    .post(addOrganisation)
    .get(getOrganisations);
router
    .route("/:id")
    .put(editOrganisation)
    .delete(deleteOrganisation);
export default router;
//# sourceMappingURL=organisationRoutes.mjs.map