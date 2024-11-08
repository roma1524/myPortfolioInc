import styled from "styled-components";

export const StyledWrapper = styled.div`
  max-width: 1071px;
  margin: 0 auto;
  border: 1px solid blue;
`;

type StyledFlexWrapperPropertyType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
}

export const StyledFlexWrapper = styled.div<StyledFlexWrapperPropertyType>`
    display: flex;
    border: 1px solid red;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || 0}
`