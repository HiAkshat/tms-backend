import express from "express";
const router = express.Router();
import { getOrganisationUser, getOrganisationUsers, addOrganisationUser, editOrganisationUser, deleteOrganisationUser, } from "../controllers/organisationUserController.mjs";
router
    .route("/")
    .get(getOrganisationUsers)
    .post(addOrganisationUser);
router
    .route("/:email")
    .get(getOrganisationUser)
    .post(editOrganisationUser)
    .delete(deleteOrganisationUser);
export default router;
//# sourceMappingURL=organisationUserRoutes.mjs.map