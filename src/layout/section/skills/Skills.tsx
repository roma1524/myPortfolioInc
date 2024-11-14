import React from "react";
import styled from "styled-components";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>Skills</SectionTitle>

        <StyledFlexWrapper wrap={"wrap"} justify={"center"}>
          <Skill iconId={"docker"} title={"React"} />
          <Skill iconId={"react"} title={"JAVACRIPT"} />
          <Skill iconId={"react"} title={"JAVACRIPT"} />
          <Skill iconId={"react"} title={"JAVACRIPT"} />
          <Skill iconId={"react"} title={"JAVACRIPT"} />
          <Skill iconId={"react"} title={"JAVACRIPT"} />
          <Skill iconId={"react"} title={"JAVACRIPT"} />
          <Skill iconId={"react"} title={"JAVACRIPT"} />
          <Skill iconId={"react"} title={"JAVACRIPT"} />
          <Skill iconId={"react"} title={"JAVACRIPT"} />
          <Skill iconId={"react"} title={"JAVACRIPT"} />
          <Skill iconId={"react"} title={"JAVACRIPT"} />
          <Skill iconId={"react"} title={"JAVACRIPT"} />
        </StyledFlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;
