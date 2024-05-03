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
export { addComment };
//# sourceMappingURL=commentsController.mjs.map