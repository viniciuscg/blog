export interface Post {
  text: string,
  img: string,
}

export interface GetPost {
  user_id: number;
}

export interface PostAll {
  id: number,
  user_id: number,
  text: string,
  img: string,
  comments: {
    text: string,
    user_id: number,
    post_id: number,
  }
}
