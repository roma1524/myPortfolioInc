import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { StyledFlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { HeaderMenu } from "./headerMenu/HeaderMenu";

export const navListItems = ["Projects", "About Me", "Contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledFlexWrapper justify={"space-between"}>
          <Logo />
          <HeaderMenu menuList={navListItems} />
        </StyledFlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  height: 100px; // Сомнительно
  padding-top: 30px;
  background-color: ${theme.color.primaryBg};

  ${Container}  {
    
  }
`;
