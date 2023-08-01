import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UserService } from 'App/Services/UserService'

export default class UsersController {
    userService: UserService

    constructor () {
        this.userService = new UserService()
    }

    public async registerUser({request, response}: HttpContextContract) {
        try {
            const { name, lastName, email, password, nickname, bio } = request.body()

            if (!name || !lastName || !email || !password || !nickname || !bio) {
                return response.badRequest({msg: 'preencha os campos'})
            }

            const user = await this.userService.registerUser(name, lastName, email, password, nickname, bio)
            return user
        } catch (error) {
            return response.badRequest({msg: (error as Error).message})
        }
    }

    public async login({request, response, auth }: HttpContextContract) {
        try {
            const { email, password } = request.body()

            if (!email || !password) {
                return response.badRequest({msg: 'preencha os campos'})
            }

            const user = await this.userService.login(email, password)
            const token = await auth.use('api').generate(user)
            return token
        } catch (error) {
            return response.badRequest({msg: (error as Error).message})
        }

    }
        
    getUser({ request }: HttpContextContract){
        const { id } = request.params()
        return this.userService.getUser(id)
    }

    public async getUserByToken({ auth }: HttpContextContract){
        return this.userService.getUser(auth.user!.id)
        
    }

    public async loggedUser ({ auth, response }: HttpContextContract) {
        return response.json(auth.user)
    }

    public async updateUser ({ auth, request }: HttpContextContract) {
        const { name, last_name, nickname, bio, background_profile, profile_pic } = request.body()

        return this.userService.updateUser({name, last_name, nickname, bio, background_profile, profile_pic, id: auth.user!.id})
    }
}
