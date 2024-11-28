import React from "react";
import MainFoto from "../../../assets/img/mainFoto.png";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/button/Button";
import {S} from './Main_Styles'

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <StyledFlexWrapper
          justify={"space-around"}
          align={"center"}
          gap={"80px"}
          wrap={"wrap-reverse"}
        >
          <S.MainWrap>
            <S.MainTitle>React Developer</S.MainTitle>
            <S.SubTitle>Roman Kulik</S.SubTitle>
            <S.MainText>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt.
            </S.MainText>
            <Button font={"16px"} title="Call me">
              Contact Me
            </Button>
          </S.MainWrap>

          <S.ImgWrapper>
            <S.Image src={MainFoto} alt="my foto" />
          </S.ImgWrapper>
        </StyledFlexWrapper>
      </Container>
    </S.Main>
  );
};
