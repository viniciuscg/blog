import { PostAll } from '../../../../Services/Post/PostTypes'
import { UserAll } from '../../../../Services/User/UserTypes'
import './style'
import { Content, DropdownContent, Header, HeaderLeft, HeaderRight, Wrapper } from './style'
import { SlOptionsVertical } from "react-icons/sl"
import { RiDeleteBinFill } from "react-icons/ri"
import { useState } from 'react'
import { PostServices } from '../../../../Services/Post/PostServices'

interface IProps {
  user: UserAll
  post: PostAll
}

function UsersPost({user, post}: IProps) {
  const [dropDownState, setDropDownState] = useState(false)

  function dropDown() {
    setDropDownState(!dropDownState)
  }
  const deletePost = async () => {
    PostServices.deletePost(post.id)
  }

  return (
    <Wrapper>
      <Header>
        <HeaderLeft>
          <img src={user.profile_pic} alt="" />
          <div>
            <p>{user.name} {user.last_name}</p>
            <p>{user.nickname}</p>
          </div>
        </HeaderLeft>
        <HeaderRight>
          <SlOptionsVertical onClick={dropDown} style={{ cursor: "pointer" }}/>
          <DropdownContent className={`dropdown-menu ${dropDownState == true ? 'active' : 'inactive'}`} >
            <button onClick={deletePost}><RiDeleteBinFill/>Delete</button>
          </DropdownContent>
        </HeaderRight>
      </Header>
      <Content>
        <p>{post.text}</p>
        <img src={post.img} alt="" />
      </Content>
    </Wrapper>
  )
}

export default UsersPost

