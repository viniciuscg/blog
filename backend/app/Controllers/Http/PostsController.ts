import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { PostService } from 'App/Services/PostService'

export default class PostsController {
    postService: PostService

    constructor () {
        this.postService = new PostService()
    }

    async createPost({request, response, auth}: HttpContextContract) {
        try {
            const { text, img } = request.body()

            if (!text) {
                return response.badRequest({msg: 'preencha a msg'})
            }

            return this.postService.createPost(text, img, auth.user!.id)
        } catch (error) {
            return response.badRequest(error)
        }
    }

    async getPosts ({request}: HttpContextContract) {
        const {id} = request.params()
        return this.postService.getPosts(id)
    }

    async deletePost({request}: HttpContextContract) {
        const { id } = request.params()
        return this.postService.deletePost(id)
    }
}
