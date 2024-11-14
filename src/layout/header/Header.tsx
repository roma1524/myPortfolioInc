import React from "react";
import styled from "styled-components";
import { Nav } from "../../components/nav/Nav";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { StyledFlexWrapper } from "../../components/FlexWrapper";

export const navListItems = ["Projects", "About Me", "Contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledFlexWrapper justify={"space-between"} align={"start"}>
          <Logo />
          <Nav menuList={navListItems} />
        </StyledFlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding-top: 30px;
  height: 100px; // Сомнительно
  border: 1px solid red;
`;
