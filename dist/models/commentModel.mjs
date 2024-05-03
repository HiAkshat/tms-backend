import mongoose from "mongoose";
const { Schema } = mongoose;
const commentSchema = new Schema({
    ticket: { type: Schema.Types.ObjectId, ref: 'Ticket', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'OrganisationUser', required: true },
    content: { type: String, required: true },
}, { timestamps: true });
const Comment = mongoose.model('Comment', commentSchema);
export { Comment };
//# sourceMappingURL=commentModel.mjs.map