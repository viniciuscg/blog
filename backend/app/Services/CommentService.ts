import { CommentRepository } from "App/Repositories/CommentRepository"

export class CommetService {
    commentRepository: CommentRepository

    constructor() {
        this.commentRepository = new CommentRepository()
    }

    async createComment(text: string, user_id: number) {
        if(!text) throw new Error('text não pode estar null')
        
        return this.commentRepository.createComment(text, user_id)
    }
}