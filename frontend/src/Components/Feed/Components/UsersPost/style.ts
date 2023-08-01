import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.secundary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  gap: 20px;
  padding: 10px;
` 

export const Header = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
` 

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  text-align: start;
  gap: 10px;
` 

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .dropdown-menu{
    position: absolute;
    right: 0;
    top: 25px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
  }

  .dropdown-menu.active{
    opacity: 1;
    visibility: visible;
    height: 40px;
  }
  
  .dropdown-menu.inactive{
    opacity: 0;
    visibility: hidden;
  }
` 

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
` 

export const DropdownContent = styled.div`
  -webkit-box-shadow: -1px 0px 38px -15px rgba(255,255,255,1);
  -moz-box-shadow: -1px 0px 38px -15px rgba(255,255,255,1);
  box-shadow: -1px 0px 38px -15px rgba(255,255,255,1);
  
  button{
    width: 100px;
    background-color: ${props => props.theme.colors.secundary};
    border: none;
    border-radius: 5px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
  }
  :hover {
    background-color: red;
  }
` 