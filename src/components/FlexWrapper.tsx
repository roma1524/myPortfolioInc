import styled from "styled-components";

type StyledFlexWrapperPropertyType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
}

export const StyledFlexWrapper = styled.div<StyledFlexWrapperPropertyType>`
    display: flex;
    border: 1px solid green;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || 0};
    height: 100%;
`