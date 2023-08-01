import { UserAll } from '../../Services/User/UserTypes'
import CreatePost from './Components/CreatePost'
import { useEffect } from 'react'
import { useState } from "react"
import UsersPost from './Components/UsersPost'
import './style'
import { Wrapper } from './style'
import { PostAll } from '../../Services/Post/PostTypes'
import { PostServices } from '../../Services/Post/PostServices'

interface IProps {
  user: UserAll
}

function Feed({user}: IProps) {

  const [posts, setPosts] = useState<PostAll[]>([])

  const getPosts = async () => {
    const response = await PostServices.getPosts(user.id)
    setPosts(response)
  }

  useEffect(() => {
    getPosts()
  },[])

  return (
    <Wrapper>
      <CreatePost user={user}/>
      {posts.map(post => (
        <UsersPost user={user} post={post}/>
      ))}
    </Wrapper>
  )
}

export default Feed

