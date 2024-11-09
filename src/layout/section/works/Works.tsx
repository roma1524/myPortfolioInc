import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import project1 from '../../../assets/img/project1.png'

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>Hello</SectionTitle>
      <StyledFlexWrapper justify={'space-between'}>
        <Work src={project1} title={'TITLE PROJECT'} text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
        <Work src={project1} title={'TITLE PROJECT'} text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
      </StyledFlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #c1f4a9;
`;
