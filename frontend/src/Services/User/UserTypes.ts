import { Post } from "../Post/PostTypes";

export interface User {
  name: string,
  lastName: string,
  email: string,
  password: string,
  nickname: string,
  bio: string,
}

export interface UserUpdate {
  name: string,
  last_name: string,
  nickname: string,
  bio: string,
  profile_pic: string,
  background_profile: string,
}

export interface Login {
  email: string,
  password: string,
}

export interface Token {
  token: string,
}

export interface UserAll {
  id: number,
  name: string,
  last_name: string,
  email: string,
  password: string,
  nickname: string,
  bio: string,
  profile_pic: string,
  background_profile: string,
  posts: Post[],
}
