import mongoose from "mongoose";
const { Schema } = mongoose;
const organisationUserSchema = new Schema({
    email_id: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    dob: { type: Date, required: true },
    organisation: { type: Schema.Types.ObjectId, ref: 'Organisation', required: true },
    joining_date: { type: Date, required: true },
});
const OrganisationUser = mongoose.model('OrganisationUser', organisationUserSchema);
export { OrganisationUser };
//# sourceMappingURL=organisationUserModel.mjs.map