import { styled } from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
  :hover {
    color: ${props => props.theme.colors.fontColorLowOpacity};
  }
`

export const Content = styled.div`
  .user-profile {
    ${props => props.theme.flexDisplay}
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: center;
    gap: 20px;
    font-weight: 100;
    font-size: 13px;
  }
  
  input {
    width: 350px;
    height: 30px;
    border-radius: 3px;
    background-color: transparent;
    border: 1px solid ${props => props.theme.colors.fontColor};
  }

  button {
    background-color: ${props => props.theme.colors.buttonColors};
    border: none;
    height: 35px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
  }
`
export const InputLabel = styled.div`
  display: flex;  
  flex-direction: column;
  text-align: left;
`

export const ColorBackgroundProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
`