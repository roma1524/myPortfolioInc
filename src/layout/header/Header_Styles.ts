import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  height: 100px; // Сомнительно
  padding-top: 30px;
  background-color: ${theme.color.primaryBg};
`;

export const S = {
    Header,

}