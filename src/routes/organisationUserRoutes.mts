import express from "express";
const router = express.Router();

import {
  getOrganisationUser,
  getOrganisationUsers,
  addOrganisationUser,
  editOrganisationUser,
  deleteOrganisationUser,
  getOrganisationUsersByOrgID,
  getOrganisationUserByEmail,
  sendOTP,
  verifyOTP
} from "../controllers/organisationUserController.mjs";

// const organisationInitializer(prefix: string) => {
//      router.get('/', )
// }

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

router
.route("/sendOTP/:email_id")
.post(sendOTP)

router
  .route("/verifyOTP")
  .post(verifyOTP)

export default router;