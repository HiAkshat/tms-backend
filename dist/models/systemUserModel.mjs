import mongoose from "mongoose";
const { Schema } = mongoose;
const systemUserSchema = new Schema({
    email_id: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    dob: { type: Date, required: true },
});
const SystemUser = mongoose.model('SystemUser', systemUserSchema);
export { SystemUser };
//# sourceMappingURL=systemUserModel.mjs.map