import { UserDto } from "App/Dto/UserDto";
import User from "App/Models/User";

export class UserRepository {
    async registerUser(name: string, lastName: string, email: string, password: string, nickname: string, bio: string) {
        const user = new User()

        user.name = name
        user.last_name = lastName
        user.email = email
        user.password = password
        user.nickname = nickname
        user.bio = bio

        await user.save()
        return user
    }

    async loginUser(email: string, password: string) {
       const user = await User
            .query()
            .where('email', email)
            .andWhere('password', password)
            .first()

        return user
    }

    async getUser(id: number) {
        const user = await User
            .query()
            .where('id', id)
            .preload('posts', query => query.preload('comments'))
            .first()
        return user
    }

    getUserByEmail(email: string) {
        return User.findBy('email', email)
    }

    async updateUser(user: UserDto) {
        const findUser = await User.findOrFail(user.id) 

        findUser.name = user.name
        findUser.last_name = user.last_name
        findUser.nickname = user.nickname
        findUser.bio = user.bio
        findUser.background_profile = user.background_profile
        findUser.profile_pic = user.profile_pic

        await findUser.save()
        return findUser
    }
}