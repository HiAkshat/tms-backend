import express from "express";
const router = express.Router();
import { getOrganisations, getOrganisation, addOrganisation, editOrganisation, deleteOrganisation, getSortedOrganisations } from "../controllers/organisationController.mjs";
router
    .route("/")
    .post(addOrganisation)
    .get(getOrganisations);
router
    .route("/sorted")
    .get(getSortedOrganisations);
router
    .route("/:id")
    .get(getOrganisation)
    .put(editOrganisation)
    .delete(deleteOrganisation);
export default router;
//# sourceMappingURL=organisationRoutes.mjs.map