import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/button/Button";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <StyledForm>
          <StyledField placeholder={"Name"} />
          <StyledField placeholder={"Email"} />
          <StyledField placeholder={"Message"} as={"textarea"} />
          <Button type={"submit"}>Submit</Button>
        </StyledForm>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 50vh;
  outline: 1px solid red;
`;

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`;

const StyledField = styled.input``;
