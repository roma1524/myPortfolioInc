import styled from "styled-components";

export const StyledFlexWrapper = styled.div`
  max-width: 1071px;
  height: 100vh;
  margin: 0 auto;
  border: 1px solid blue;
`;

type StyledFlexWrapperCopyPropertyType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
}

export const StyledFlexWrapperCopy = styled.div<StyledFlexWrapperCopyPropertyType>`
    display: flex;
    border: 1px solid red;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
`