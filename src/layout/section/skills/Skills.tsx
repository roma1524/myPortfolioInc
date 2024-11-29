import React from "react";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { S } from "./Skills_Styles";

export const Skills = () => {
  return (
    <S.Skills>
      <Container>
        <SectionTitle marginBottom={"20px"}>Skills</SectionTitle>

        <StyledFlexWrapper wrap={"wrap"} justify={"center"} gap={"115px"}>
          <Skill iconId={"react"} title={"react"} />
          <Skill iconId={"docker"} title={"docker"} />
          <Skill iconId={"express"} title={"express"} />
          <Skill iconId={"git"} title={"github"} />
          <Skill iconId={"javascript"} title={"javascript"} />
          <Skill iconId={"jest"} title={"jest"} />
          <Skill iconId={"mongo db"} title={"mongo db"} />
          <Skill iconId={"react native"} title={"react native"} />
          <Skill iconId={"nest js"} title={"nest js"} />
          <Skill iconId={"postgresql"} title={"postgresql"} />
          <Skill iconId={"redux"} title={"redux"} />
          <Skill iconId={"styled_component"} title={"styled component"} />
          <Skill iconId={"typescript"} title={"typescript"} />
        </StyledFlexWrapper>
      </Container>
    </S.Skills>
  );
};


