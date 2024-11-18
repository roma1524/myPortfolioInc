import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/button/Button";
import { theme } from "../../../styles/Theme";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle marginBottom={"50px"}>Contacts</SectionTitle>
        <StyledForm>
          <Label>
            Name
            <StyledField placeholder={"Example"} />
          </Label>

          <Label>
            Email
            <StyledField placeholder={"Value"} />
          </Label>

          <Label>
            Mensage
            <StyledField placeholder={"Hi, i will ..."} as={"textarea"} />
          </Label>

          <Button type={"submit"}>Submit</Button>
        </StyledForm>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`margin-bottom: 180px;`;

const StyledForm = styled.form`
  max-width: 530px;
  width: 100%;
  min-height: 430px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  textarea{
    resize: none;
    height: 165px;
  }
`;

const StyledField = styled.input`
  width: 100%;
  border: 1px solid ${theme.color.font};
  border-radius: 6px;
  padding: 15px 20px;

  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;

  background: ${theme.color.primaryBg};

  &::placeholder {
    color: ${theme.color.font};
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }

  &:focus-visible {
    outline: 1px solid ${theme.color.font};
  }
`;

const Label = styled.label`
  margin-bottom: 30px;

  font-size: 14px;
  line-height: 17px;
  color: ${theme.color.font};
`;
