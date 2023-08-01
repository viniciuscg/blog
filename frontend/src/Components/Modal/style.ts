import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${props => props.theme.colors.modalBackground};
	border-radius: 20px;
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
` 

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 600px;
	height: 600px;
	background-color: ${props => props.theme.colors.secundary};
	border-radius: 10px;
	-webkit-box-shadow: 10px 10px 35px 5px rgba(0,0,0,1);
	-moz-box-shadow: 10px 10px 35px 5px rgba(0,0,0,1);
	box-shadow: 10px 10px 35px 5px rgba(0,0,0,1);
`

export const Header = styled.div`
	display: flex;
	justify-content: end;
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`