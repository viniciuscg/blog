import styled from "styled-components";
import { UserAll } from "../../Services/User/UserTypes";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 350px;
  height: 350px;
  background-color: ${props => props.theme.colors.secundary};
  border-radius: 20px;
` 

export const Profile = styled.div<{user: UserAll}>`
  background-color: ${props => props.user.background_profile};
  width: 100%;
  height: 30%;
  position: relative;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
` 

export const ProfileImg = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -45%;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
` 

export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
  gap: 15px;
  text-align: center;
  h1 {
    font-size: 30px
  }
  h2 {
    font-size: 20px;
    color: ${props => props.theme.colors.fontColorLowOpacity} !important;
  }
` 

export const ProfileEdit = styled.div`
    margin-top: 40px;
    border-top: 1px solid ${props => props.theme.colors.background};
    width: 100%;
    cursor: pointer;
    
    h2 {
      margin-top: 20px;
      font-size: 20px;
    }

    :hover {
      color: ${props => props.theme.colors.fontColorLowOpacity} !important;
    }
` 