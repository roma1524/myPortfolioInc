import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <Container>
        <SectionTitle marginBottom={"20px"}>About Me</SectionTitle>
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
  padding-left: 22px;
  margin-bottom: 130px;
`;

const StyledAboutMeText = styled.p`
  position: relative;
  max-width: 843px;

  font-size: 18px;
  font-weight: 400;
  line-height: 26px;

  &::before {
    position: absolute;
    display: inline-block;

    content: '';
    height: 88%;
    width: 5px;
    top: 8px;
    left: -28px;
    border-radius: 2px;
    background: ${theme.color.linearColor};
  }
`;
