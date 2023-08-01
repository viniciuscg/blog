import { styled } from "styled-components";

export const Container = styled.div<{color: string, selected: boolean}>`
    border-radius: 50%;
    background-color: ${props => props.color};
    border: 1px solid ${props => props.selected ? "blue" : "transparent" };
    display: flex;
    width: 30px;
    height: 30px;   
    cursor: pointer;
    &:hover{
        background-color: ${props => props.theme.colors.fontColorLowOpacity}
    }
`