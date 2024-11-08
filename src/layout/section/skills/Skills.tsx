import React from "react";
import styled from "styled-components";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>

      <StyledFlexWrapper wrap={'wrap'} justify={'center'} >
        <Skill iconId={'docker'} title={'React'}/>
        <Skill iconId={'react'} title={'JAVACRIPT'}/>
        <Skill iconId={'react'} title={'JAVACRIPT'}/>
        <Skill iconId={'react'} title={'JAVACRIPT'}/>
        <Skill iconId={'react'} title={'JAVACRIPT'}/>
        <Skill iconId={'react'} title={'JAVACRIPT'}/>
        <Skill iconId={'react'} title={'JAVACRIPT'}/>
        <Skill iconId={'react'} title={'JAVACRIPT'}/>
        <Skill iconId={'react'} title={'JAVACRIPT'}/>
        <Skill iconId={'react'} title={'JAVACRIPT'}/>
        <Skill iconId={'react'} title={'JAVACRIPT'}/>
        <Skill iconId={'react'} title={'JAVACRIPT'}/>
        <Skill iconId={'react'} title={'JAVACRIPT'}/>
      </StyledFlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
    min-height: 500px;
    display: flex;
    flex-direction: column;

    background-color: #ebf1bb;
`;
