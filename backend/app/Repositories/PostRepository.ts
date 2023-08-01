import Post from "App/Models/Post";

export class PostRepostory {
    async createPost(text: string, img: string, user_id: number) {
        const post = new Post()

        post.text = text
        post.img = img
        post.user_id = user_id

        await post.save()
        return post
    }

    async getPosts (user_id: number) {
        const posts = await Post
            .query()
            .where('user_id', user_id)
            .preload('comments', query => query.preload('user'))
            .preload('user')
        return posts
    }

    async deletePost(id: number) {
        await Post
            .query()
            .where('id', id)
            .delete()
    }
}
