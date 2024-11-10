import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { StyledButton } from "../../../components/Button";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
            <StyledForm>

                <StyledField placeholder={'Name'}/>
                <StyledField placeholder={'Email'}/>
                <StyledField placeholder={'Message'} as={'textarea'}/>
                <StyledButton type={'submit'}>Submit</StyledButton>
            </StyledForm>
        
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
    min-height: 50vh;
    background-color: #f7e8c4;
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`

const StyledField = styled.input`
    
`
