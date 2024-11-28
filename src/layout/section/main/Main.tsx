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

// const StyledMain = styled.section`
//   display: flex;
//   min-height: 72vh;
//   margin-bottom: 80px;

//   @media ${theme.media.mobile} {
//     ${StyledFlexWrapper} {
//       padding-top: 50px;
//       gap: 0;
//     }
//   }
// `;

// const StyledMainWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: start;
//   max-width: 514px;

//   @media ${theme.media.mobile} {
//     align-items: center;
//   }
// `;

// const ImgWrapper = styled.div`
//   display: flex;
//   width: 320px;
//   min-height: 240px;
//   flex-grow: 1;
//   `;

// const Image = styled.img`
//   width: 100%;
//   object-fit: cover;


// `;

// const StyledMainTitle = styled.h1`
//   ${font({
//     family: '"Tinos", serif',
//     weight: 400,
//     Fmin: 16,
//     Fmax: 20
//   })} margin-bottom: 10px;
// `;

// const StyledSubTitle = styled.h2`
//   ${font({ weight: 600, Fmax: 72, Fmin: 40 })} background: ${theme.color
//       .linearColor};
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
//   text-fill-color: transparent;
//   line-height: 88px;
//   letter-spacing: 0%;
//   margin-bottom: 11px;
// `;

// const StyledMainText = styled.p`
//   font-size: 16px;
//   font-weight: 400;
//   line-height: 24px;
//   letter-spacing: 4%;
//   margin-bottom: 30px;

//   @media ${theme.media.mobile} {
//     text-align: center;
//   }
// `;
