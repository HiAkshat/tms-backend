import { Comment } from "../models/commentModel.mjs";
const addComment = async (req, res) => {
    try {
        const data = await Comment.create(req.body);
        res.status(200).json(data);
        console.log("New comment has been added to database!");
    }
    catch (e) {
        res.status(404).json({ error: e });
    }
};
const getCommentsByTicketId = async (req, res) => {
    try {
        const data = await Comment.find({ ticket: req.params.ticket_id }).populate('user');
        res.status(200).json(data);
        console.log("Comments data retrieved!");
    }
    catch (e) {
        res.status(404).json({ error: e });
    }
};
const deleteComment = async (req, res) => {
    try {
        const data = await Comment.findByIdAndDelete(req.params.id);
        res.status(200).json(data);
        console.log("Comment successfully deleted!");
    }
    catch (e) {
        res.status(404).json({ error: e });
    }
};
export { addComment, getCommentsByTicketId, deleteComment };
//# sourceMappingURL=commentController.mjs.map