import './style'
import { NavbarCenter, NavbarLeft, NavbarRight, UserCard, Wrapper } from './style'
import { PiGitlabLogoSimpleBold, PiUsersThree } from 'react-icons/pi'
import { BiSolidDownArrow } from 'react-icons/bi'
import { UserAll } from '../../Services/User/UserTypes'
import { useState } from 'react'
import { CgLogOut } from 'react-icons/cg'

interface IProps {
  user: UserAll
}

function Header({user}: IProps) {
  const [dropDownState, setDropDownState] = useState(false)

  function dropDown() {
    setDropDownState(!dropDownState)
  }

  return (
    <Wrapper>
      <NavbarLeft>
        <PiUsersThree style={{ fontSize: "40px" }}/>
        <input type="text" placeholder='Search user...' />
      </NavbarLeft>
      <NavbarCenter>
        <PiGitlabLogoSimpleBold style={{ fontSize: "50px" }}/>
      </NavbarCenter>
      <NavbarRight dropDownState={dropDownState}>
        <div className='Content' onClick={dropDown}>
          <p>{user.nickname}</p>
          <BiSolidDownArrow style={{ fontSize: "10px" }}/>
        </div>
        <UserCard className={`dropdown-menu ${dropDownState == true ? 'active' : 'inactive'}`}>
            <p><CgLogOut/> Logout</p>
        </UserCard>
      </NavbarRight >
    </Wrapper>
  )
}

export default Header
