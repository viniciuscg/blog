import { CommentRepository } from "App/Repositories/CommentRepository";
import { PostRepostory } from "App/Repositories/PostRepository";

export class PostService {
    postRepository: PostRepostory
    commentRepository: CommentRepository

    constructor() {
        this.postRepository = new PostRepostory()
        this.commentRepository = new CommentRepository()
    }

    async createPost(text: string, img: string, user_id: number) {
        if(!text) throw new Error('text não pode estar null')
        
        return this.postRepository.createPost(text, img, user_id)
    }

    async getPosts (user_id: number) {
        return this.postRepository.getPosts(user_id)
    }
    
    async deletePost(id: number) {
        this.postRepository.deletePost(id)
        this.commentRepository.deleteComment(id)
    }
    
}
