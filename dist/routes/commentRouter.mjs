import express from "express";
const router = express.Router();
import { addComment, getCommentsByTicketId, deleteComment } from "../controllers/commentController.mjs";
router
    .route("/")
    .post(addComment);
router
    .route("/:ticket_id")
    .get(getCommentsByTicketId)
    .delete(deleteComment);
export default router;
//# sourceMappingURL=commentRouter.mjs.map