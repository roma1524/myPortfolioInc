import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const AboutMe = styled.section`
  padding-left: 22px;
  margin-bottom: 130px;
`;

const AboutMeText = styled.p`
  position: relative;
  max-width: 843px;

  font-size: 18px;
  font-weight: 400;
  line-height: 26px;

  &::before {
    position: absolute;
    display: inline-block;

    content: '';
    height: 88%;
    width: 5px;
    top: 8px;
    left: -28px;
    border-radius: 2px;
    background: ${theme.color.linearColor};
  }
`;

export const S = {
    AboutMe,
    AboutMeText
}