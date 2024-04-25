import mongoose from "mongoose"
const { Schema } = mongoose;

const organisationSchema = new Schema({
  organisation_name: { type: String, unique: true, required: true },
  display_name: { type: String, required: true },
});

const systemUserSchema = new Schema({
  email_id: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  dob: { type: Date, required: true },
});

const organisationUserSchema = new Schema({
  email_id: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  dob: { type: Date, required: true },
  organisation: { type: Schema.Types.ObjectId, ref: 'Organisation', required: true },
  joining_date: { type: Date, required: true },
});


const ticketSchema = new Schema({
  type: { type: String, enum: ['Story', 'Task', 'Bug'], required: true },
  key: { type: String, unique: true, required: true },
  summary: { type: String, required: true },
  description: { type: String },
  assignee: { type: Schema.Types.ObjectId, ref: 'OrganisationUser', required: true },
  reporter: { type: Schema.Types.ObjectId, ref: 'OrganisationUser', required: true },
  status: { type: String, enum: ['TOBEPICKED', 'INPROGRESS', 'INTESTING', 'COMPLETED'], default: 'TOBEPICKED', required: true },
  created_date: { type: Date, default: Date.now, required: true },
  updated_date: { type: Date, default: Date.now, required: true },
  due_date: { type: Date },
  files: [{ type: String }], // Assuming you'll store file paths here
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

const commentSchema = new Schema({
  ticket: { type: Schema.Types.ObjectId, ref: 'Ticket', required: true },
  user: { type: Schema.Types.ObjectId, ref: 'OrganisationUser', required: true },
  content: { type: String, required: true },
  created_date: { type: Date, default: Date.now, required: true },
  updated_date: { type: Date, default: Date.now, required: true }
});


const Organisation = mongoose.model('Organisation', organisationSchema);
const SystemUser = mongoose.model('SystemUser', systemUserSchema);
const OrganisationUser = mongoose.model('OrganisationUser', organisationUserSchema);
const Ticket = mongoose.model('Ticket', ticketSchema);
const Comment = mongoose.model('Comment', commentSchema);

export { Organisation, SystemUser, OrganisationUser, Ticket, Comment };