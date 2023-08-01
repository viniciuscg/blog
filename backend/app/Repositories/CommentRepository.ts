import Comment from "App/Models/Comment";

export class CommentRepository {
    async createComment(text: string, user_id: number) {
        const comment = new Comment

        comment.text = text
        comment.user_id = user_id

        await comment.save()
        return comment
    }

    async deleteComment(id: number) {
        await Comment
            .query()
            .where("post_id", id)
            .delete()
    }
}