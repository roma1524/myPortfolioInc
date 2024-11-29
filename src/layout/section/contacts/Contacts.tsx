import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/button/Button";
import { S } from "./Contacts_Styles";

export const Contacts: React.FC = () => {
  return (
    <S.Contacts>
      <Container>
        <SectionTitle marginBottom={"50px"}>Contacts</SectionTitle>
        <S.Form>
          <S.Label>
            <S.InputName>Name</S.InputName>
            <S.Field placeholder={"Example"} required />
          </S.Label>

          <S.Label>
            <S.InputName>Email</S.InputName>
            <S.Field placeholder={"Value"} required />
          </S.Label>

          <S.Label>
            <S.InputName>Mensage</S.InputName>
            <S.Field
              placeholder={"Hi, i will ..."}
              as={"textarea"}
              required
            />
          </S.Label>

          <Button type={"submit"}>Submit</Button>
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
