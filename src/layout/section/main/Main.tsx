import React from "react";
import MainFoto from "../../../assets/img/mainFoto.webp";
import styled from "styled-components";
import { StyledFlexWrapperCopy } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledSection>
      <StyledFlexWrapperCopy direction={"column"} align={"start"}>
        <h1>React Developer</h1>
        <span>Roman Kulik</span>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt.
        </p>
        <button>Contact Me</button>
      </StyledFlexWrapperCopy>

      <StyledImage src={MainFoto} alt="my foto" />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
`;

const StyledImage = styled.img`
  height: 433px;
  width: 577px;
  object-fit: cover;
`;
