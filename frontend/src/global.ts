import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Belanosima:wght@400;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    color: ${props => props.theme.colors.fontColor};
    ::placeholder{
      color: ${props => props.theme.colors.fontColor};
    }
    :hover{
      color: ${props => props.theme.colors.fontColor};
    } 
  }

  body {
    background-color: ${props => props.theme.colors.background};
    font-family: 'Roboto', sans-serif;
  }
`