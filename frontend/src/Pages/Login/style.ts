import styled from "styled-components";

export const Wrapper = styled.div`
    ${props => props.theme.flexDisplay}
    align-items: center;
    justify-content: center;
    width:100vw;
    height:100vh;
    position: relative;
` 
export const Card = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateY(-50%);
    background-color: ${props => props.theme.colors.secundary};
    width: 500px;
    height: 500px;
    border-radius: 5px;
    @media (max-width: 600px) {
        width: 300px;
        height: 300px;
    }
` 

export const CardContent = styled.div`
    ${props => props.theme.flexDisplay}
    align-items: center;
    width: 100%;
    height: 100%;

    form {
        gap: 50px;
        ${props => props.theme.flexDisplay}
        justify-content: center;
        height: 100%;
    }
    
    .inputs-login {
        ${props => props.theme.flexDisplay}
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
        cursor: pointer
    }

    h1 {
        font-weight: 900;
        font-size: 30px;
        margin-top: 40px;
    }

    .login-text {
        ${props => props.theme.flexDisplay}
        gap: 10px;
        align-items: center;
        margin-bottom: 30px;
    }

    @media (max-width: 600px) {
        form {
            gap: 20px;
        }
        
        .inputs-login {
            font-size: 13px;
        }

        input {
            width: 250px;
            height: 25px;
        }

        button {
            height: 25px;
            font-size: 11px;
        }

        .login-text {
            margin-top: 20px;
        }

    }
`

export const InputLabel = styled.div`
    ${props => props.theme.flexDisplay}
    font-weight: 100;
    gap: 5px;
    position: relative;

    span {
        display: flex;
        position: absolute;
        right: 15px;
        bottom: 10px;
        margin: auto;
    }
    
    @media (max-width: 600px) {
        span {
            display: flex;
            position: absolute;
            right: 12%;
            bottom: 37%;
            margin: auto;
        }
    }    
`

export const LoginText = styled.div`
    display: flex;
    gap: 5px;
    font-size: 13px;
    cursor: pointer;
    :hover {
        color: #556ee7;
    }
    @media (max-width: 600px) {
        font-size: 10px;
    }
`

