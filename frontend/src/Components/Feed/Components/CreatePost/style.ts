import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.secundary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  gap: 10px;
  padding: 10px;

	button {
		background-color: ${props => props.theme.colors.buttonColors};
		border: none;
		height: 35px;
    width: 100px;
		font-size: 15px;
		font-weight: 600;
		border-radius: 5px;
		cursor: pointer;
	}

  img {
    width: 300px;
    height: 300px;
    border-radius: 20px;
  }
` 

export const Container = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;

  textarea {
		border-radius: 3px;
    width: 100%;
    font-size: 15px;  
    padding: 10px;
    display: flex;
		background-color: ${props => props.theme.colors.fontColorLowOpacity};
    resize: none;
    overflow: hidden;
    outline: none;
    border: none;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

` 

export const InputLabel = styled.div`
`

export const UploadImg = styled.div`
  position: relative;
  
  span {
    color: ${props => props.theme.colors.fontColor};
    background-color: ${props => props.theme.colors.secundary};
    border-radius: 100%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 10px;
    top: 10px;
    position: absolute;
    cursor: pointer
  }

`
