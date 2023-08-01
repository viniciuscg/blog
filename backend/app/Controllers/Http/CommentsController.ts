import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { CommetService } from "App/Services/CommentService";

export default class CommentsController {
    commentService: CommetService

    constructor () {
        this.commentService = new CommetService()
    }

    async createComment({request, response}: HttpContextContract) {
        try {
            const {text, user_id } = request.body()

            if (!text) {
                return response.badRequest({msg: 'preencha a msg'})
            }
            
            return this.commentService.createComment(text, user_id)
        } catch (error) {
            return response.badRequest(error)
        }

    }

}
