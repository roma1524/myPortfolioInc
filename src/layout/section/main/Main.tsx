import React from "react";
import MainFoto from "../../../assets/img/mainFoto.png";
import styled from "styled-components";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { Button } from "../../../components/button/Button";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <StyledFlexWrapper justify={"space-between"} align={"center"} gap={'80px'}>
          <StyledMaunWrap>
            <StyledMainTitle>React Developer</StyledMainTitle>
            <StyledSubTitle>Roman Kulik</StyledSubTitle>
            <StyledMainText>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt.
            </StyledMainText>
            <Button font={'16px'} title="Call me">Contact Me</Button>
          </StyledMaunWrap>

          <StyledImage src={MainFoto} alt="my foto" />
        </StyledFlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;
  border: 1px solid red;
`;

const StyledMaunWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 514px;
`

const StyledImage = styled.img`
  height: 433px;
  width: 577px;
  object-fit: cover;
`;

const StyledMainTitle = styled.h1`
  font-family: "Tinos", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  margin-bottom: 10px;
`;

const StyledSubTitle = styled.span`
  background: ${theme.color.linearColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-size: 72px;
  font-weight: 600;
  line-height: 88px;
  letter-spacing: 0%;
  margin-bottom: 11px;
`;

const StyledMainText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 4%;
  margin-bottom: 30px;
`;