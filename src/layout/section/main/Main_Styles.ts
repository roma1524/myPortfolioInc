import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";

const Main = styled.section`
  display: flex;
  min-height: 72vh;
  margin-bottom: 80px;

  @media ${theme.media.mobile} {
    ${StyledFlexWrapper} {
      padding-top: 50px;
      gap: 0;
    }
  }
`;

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 514px;

  @media ${theme.media.mobile} {
    align-items: center;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  width: 320px;
  min-height: 240px;
  flex-grow: 1;
  `;

const Image = styled.img`
  width: 100%;
  object-fit: cover;


`;

const MainTitle = styled.h1`
  ${font({
    family: '"Tinos", serif',
    weight: 400,
    Fmin: 16,
    Fmax: 20
  })} margin-bottom: 10px;
`;

const SubTitle = styled.h2`
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

const MainText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 4%;
  margin-bottom: 30px;

  @media ${theme.media.mobile} {
    text-align: center;
  }
`;

export const S = {
    Main,
    MainWrap,
    ImgWrapper,
    Image,
    MainTitle,
    SubTitle,
    MainText
}