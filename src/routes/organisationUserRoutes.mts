import express from "express";
const router = express.Router();

import {
  getOrganisationUser,
  getOrganisationUsers,
  addOrganisationUser,
  editOrganisationUser,
  deleteOrganisationUser,
  getOrganisationUsersByOrgID,
  getOrganisationUserByEmail
} from "../controllers/organisationUserController.mjs";

router
  .route("/")
  .get(getOrganisationUsers)
  .post(addOrganisationUser);

router
  .route("/:id")
  .get(getOrganisationUser)
  .put(editOrganisationUser)
  .delete(deleteOrganisationUser);

router
  .route("/email/:email_id")
  .get(getOrganisationUserByEmail)

router
  .route("/organisation/:id")
  .get(getOrganisationUsersByOrgID)

export default router;