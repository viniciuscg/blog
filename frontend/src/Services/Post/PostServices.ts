import api from "../api";
import { Post, PostAll } from "./PostTypes";

export class PostServices {
	static async createPost(post: Post) {
    try {
		  const token = localStorage.getItem('token')
			const response = await api.post<Post>('/createPost', post,{
        headers: {
          Authorization: `bearer ${token}`
        }
      })
			return response 
		} catch (error: any) {
			throw new Error(error.response.data.msg);
		}
	}

  static async getPosts (user_id: number) {
    const response = await api.get<PostAll[]>(`/getPosts/${user_id}`)
    return response.data
  }

  static deletePost (id: number) {
    api.delete(`/deletePost/${id}`)
  }
}