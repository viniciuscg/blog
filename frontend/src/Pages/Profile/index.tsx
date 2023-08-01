import { useState, useEffect } from "react"
import { UserServices } from '../../Services/User/UserServices'
import './style'
import { Container, Wrapper } from './style'
import Header from "../../Components/Header"
import ProfileSpecs from "../../Components/ProfileSpecs"
import Feed from "../../Components/Feed"
import { UserAll } from "../../Services/User/UserTypes"
import SearchPost from "../../Components/SearchPost"


function Profile() {

  const[user, setUser] = useState<UserAll>()

  const getUserByToken = async () => {
    const token = localStorage.getItem('token')
    const response = await UserServices.getUserByToken(token!)
    setUser(response)
  }

  useEffect(() => {
    getUserByToken()
  },[])

  return (
    user &&
    <Wrapper> 
      <Header user={user} />
      <Container>
        <ProfileSpecs user={user}/>
        <SearchPost/>
        <Feed user={user}/>
      </Container>
    </Wrapper>
  )
}

export default Profile
