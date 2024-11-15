import styled from "styled-components"
import { theme } from "../../styles/Theme"

type ButtonPropsType = {
    font: string
}

export const Button = styled.button<ButtonPropsType>`
    font-family: Montserrat;
    color: ${theme.color.buttonColorText};
    font-size: ${props => props.font || '16px'};
    padding: 12px 22px;
    min-height: 45px;
    background: ${theme.color.linearColor};
    border-radius: 6px;
    border: 1px solid transparent;

    
    &:hover {
        cursor: pointer;
        background: transparent;
        border: 1px solid ${theme.color.font};
        color: ${theme.color.font};
    }
`