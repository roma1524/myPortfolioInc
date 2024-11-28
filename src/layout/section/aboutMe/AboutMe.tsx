import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { S } from "./AboutMe_Styles";

export const AboutMe = () => {
  return (
    <S.AboutMe>
      <Container>
        <SectionTitle marginBottom={"20px"}>About Me</SectionTitle>
        <S.AboutMeText>
          The long barrow was built on land previously inhabited in the
          Mesolithic period. It consisted of a sub-rectangular earthen tumulus,
          estimated to have been 15 metres (50 feet) in length, with a chamber
          built from sarsen megaliths on its eastern end. Both inhumed and
          cremated human remains were placed within this chamber during the
          Neolithic period, representing at least nine or ten individuals.
        </S.AboutMeText>
      </Container>
    </S.AboutMe>
  );
};
