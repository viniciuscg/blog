import api from "../api";
import { Login, Token, User, UserAll, UserUpdate } from "./UserTypes"

export class UserServices {
	static async registerUser(user: User) {
		try {
			const response = await api.post<User>('/register', user)
			return response 
		} catch (error: any) {
			throw new Error(error.response.data.msg);
		}
	}

	static async login(user: Login) {
		try {
			const response = await api.post<Token>('/login', user)
			localStorage.setItem('token', response.data.token)
			return response

		} catch (error: any) {
			throw new Error(error.response.data.msg)
		}
	}

	static async loggedUser(token: string) {
		const response = await api.get<User>(`/logged-user`, {
			headers: {
				Authorization: `bearer ${token}`
			}
		})
		return response
	}

	static async getUserByToken(token: string) {
		const response = await api.get<UserAll>(`/getUserByToken` , {
			headers: {
				Authorization: `bearer ${token}`
			}
		})
		return response.data
	}

	static async updateUser(user: UserUpdate) {
		const token = localStorage.getItem('token')
		const response = await api.post<UserUpdate>(`/updateUser`, user,{
			headers: {
				Authorization: `bearer ${token}`
			}
		})
		return response
	}

}