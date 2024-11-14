import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import project1 from "../../../assets/img/project1.png";
import { Container } from "../../../components/Container";

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>Hello</SectionTitle>
        <StyledFlexWrapper justify={"space-between"} wrap={"wrap"}>
          <Work
            src={project1}
            title={"TITLE PROJECT"}
            text={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
          />
          <Work
            src={project1}
            title={"TITLE PROJECT"}
            text={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
          />
          <Work
            src={project1}
            title={"TITLE PROJECT"}
            text={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
          />
          <Work
            src={project1}
            title={"TITLE PROJECT"}
            text={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
          />
        </StyledFlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 50vh;
  border: 1px solid red;
`;
