import React from "react";
import MainFoto from "../../../assets/img/mainFoto.png";
import styled from "styled-components";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { Button } from "../../../components/button/Button";
import { font } from "../../../styles/Common";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <StyledFlexWrapper
          justify={"space-around"}
          align={"center"}
          gap={"80px"}
          wrap={"wrap-reverse"}
        >
          <StyledMainWrap>
            <StyledMainTitle>React Developer</StyledMainTitle>
            <StyledSubTitle>Roman Kulik</StyledSubTitle>
            <StyledMainText>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt.
            </StyledMainText>
            <Button font={"16px"} title="Call me">
              Contact Me
            </Button>
          </StyledMainWrap>

          <ImgWrapper>
            <Image src={MainFoto} alt="my foto" />
          </ImgWrapper>
        </StyledFlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;
  outline: 1px solid red;

  @media ${theme.media.mobile} {
    ${StyledFlexWrapper} {
      padding-top: 50px;
      gap: 0;
    }
  }
`;

const StyledMainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 514px;

  @media ${theme.media.mobile} {
    align-items: center;
  }
`;

const ImgWrapper = styled.div``;

const Image = styled.img`
  width: 420px;
  height: 300px;
  object-fit: cover;

  @media ${theme.media.mobile} {
    width: 320px;
    height: 240px;
  }
`;

const StyledMainTitle = styled.h1`
  ${font({
    family: '"Tinos", serif',
    weight: 400,
    Fmin: 16,
    Fmax: 20
  })} margin-bottom: 10px;
`;

const StyledSubTitle = styled.h2`
  ${font({ weight: 600, Fmax: 72, Fmin: 40 })} background: ${theme.color
      .linearColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
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

  @media ${theme.media.mobile} {
    text-align: center;
  }
`;
