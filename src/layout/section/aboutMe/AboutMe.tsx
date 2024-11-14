import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <StyledAboutMeText>
          The long barrow was built on land previously inhabited in the
          Mesolithic period. It consisted of a sub-rectangular earthen tumulus,
          estimated to have been 15 metres (50 feet) in length, with a chamber
          built from sarsen megaliths on its eastern end. Both inhumed and
          cremated human remains were placed within this chamber during the
          Neolithic period, representing at least nine or ten individuals.
        </StyledAboutMeText>
      </Container>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.section`
  padding-left: 17px;
  border: 1px solid red;
`;

const StyledAboutMeText = styled.p`
  max-width: 843px;

  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 4%;
`;
