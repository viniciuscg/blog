import { UserDto } from "App/Dto/UserDto";
import { UserRepository } from "App/Repositories/UserRepository";

export class UserService {
    userRepository: UserRepository

    constructor() {
        this.userRepository = new UserRepository()
    }

    async registerUser(name: string, last_name: string, email: string, password: string, nickname: string, bio: string) {
        const findUser = await this.userRepository.getUserByEmail(email)
        if (findUser) throw new Error('usuario já registrado')
        
        return this.userRepository.registerUser(name, last_name, email, password, nickname, bio)
    }

    async login(email: string, password: string) {
        const user = await this.userRepository.loginUser(email, password)
        if (!user) throw new Error('usuario incorreto ou inexistente')

        return user
    }
    
    getUser(id: number){
        return this.userRepository.getUser(id)
    }

    updateUser(user: UserDto) {
        return this.userRepository.updateUser(user)
    }
}
