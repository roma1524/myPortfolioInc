import React from "react";
import styled from "styled-components";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle marginBottom={"20px"}>Skills</SectionTitle>

        <StyledFlexWrapper wrap={"wrap"} justify={"center"} gap={"115px"}>
          <Skill iconId={"react"} title={"docker"} />
          <Skill iconId={"express"} title={"docker"} />
          <Skill iconId={"docker"} title={"docker"} />
          <Skill iconId={"docker"} title={"docker"} />
          <Skill iconId={"docker"} title={"docker"} />
          <Skill iconId={"docker"} title={"docker"} />
          <Skill iconId={"docker"} title={"docker"} />
          <Skill iconId={"docker"} title={"docker"} />
          <Skill iconId={"docker"} title={"docker"} />
          <Skill iconId={"docker"} title={"docker"} />
          <Skill iconId={"docker"} title={"docker"} />
          <Skill iconId={"docker"} title={"docker"} />
          <Skill iconId={"docker"} title={"docker"} />
        </StyledFlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 140px;

  @media ${theme.media.mobile} {
    margin-bottom: 100px;
  }
`;
