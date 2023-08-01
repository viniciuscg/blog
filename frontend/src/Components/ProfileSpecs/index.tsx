import './style'
import { UserAll } from '../../Services/User/UserTypes'
import { useState } from "react"
import { Profile, ProfileEdit, ProfileImg, ProfileText, Wrapper } from './style'
import ModalProfile from './Components/ModalProfile'

interface IProps {
  user: UserAll
}

function ProfileSpecs({user}: IProps) {

  const [showModalProfile, setShowModalProfile] = useState(false);

  function showModal() {
    setShowModalProfile(true)
  }

  function closeModal() {
    setShowModalProfile(false)
  }

  return (
    <Wrapper>
      <Profile user={user}>
        <ProfileImg>
          <img src={user.profile_pic} alt="" />
        </ProfileImg>
      </Profile>
      <ProfileText>
        <div>
          <h1>{user?.name} {user?.last_name}</h1>
          <h2>{user?.nickname}</h2>
        </div>
        <p>{user?.bio}</p>
      </ProfileText>
      <ProfileEdit>
        <h2 onClick={showModal}> My Profile </h2>
      </ProfileEdit>
      <ModalProfile visible={showModalProfile} closeModal={closeModal} user={user} />
    </Wrapper>
  )
}

export default ProfileSpecs

