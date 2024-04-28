import mongoose from "mongoose"
const { Schema } = mongoose;

const organisationSchema = new Schema({
  organisation_name: { type: String, unique: true, required: true },
  display_name: { type: String, required: true },
});

const Organisation = mongoose.model('Organisation', organisationSchema);

export { Organisation };