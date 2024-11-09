import React from "react";
import styled from "styled-components";


type WorkPropsType = {
    title: string
    text: string
    src: string

}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <StyledImage src={props.src} alt='project'/>
            <StyledWorkTitle>{props.title}</StyledWorkTitle>
            {/* <StyledWorkSkills/> */}
            <StyledWorkText>{props.text}</StyledWorkText>
        </StyledWork>
    )
}

const StyledWork = styled.div`
    min-height: 636px;
    max-width: 522px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: start;
`

const StyledImage = styled.img`
    width: 100%;
    height: 388px;
    object-fit: cover;
`

const StyledWorkTitle = styled.h3`
    
`

const StyledWorkSkills = styled.ul`
    
`

const StyledWorkText = styled.p`
    
`