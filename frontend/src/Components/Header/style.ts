import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 1%;
  width: 100%;
  display: flex; 
  align-items: center;
  text-align: center;
  justify-content: space-between;
` 

export const NavbarLeft = styled.div`
  float: left;
  display: flex;
  align-items: center;
  gap: 20px;
  input{
    background-color: ${props => props.theme.colors.secundary};
    border: none;
    width: 200px;
    height: 35px;
    border-radius: 6px;
    padding-left: 10px;  
  }
` 


export const NavbarCenter = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
` 

export const NavbarRight = styled.div<{dropDownState : boolean}>`
  float: right;
  background-color: ${props => props.theme.colors.secundary};
  cursor: pointer;
  position: relative;
  padding: 0px 10px 0px 10px;
  border-radius: ${props => props.dropDownState === false ? "5px" : "0px" };
  border-top-left-radius: ${props => props.dropDownState ? "5px" : "none"};
  border-top-right-radius: ${props => props.dropDownState ? "5px" : "none"};

  :hover { 
    color: ${props => props.theme.colors.fontColorLowOpacity}
  }
  
  .dropdown-menu{
    position: absolute;
    right: 0;
    background-color: ${props => props.theme.colors.secundary};
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
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
  
  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%
  }
  
  .Content {
    height: 40px;
    gap: 10px
  }

  img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  
` 

export const UserCard = styled.div`
  background-color: ${props => props.theme.colors.secundary};
  cursor: pointer;
` 