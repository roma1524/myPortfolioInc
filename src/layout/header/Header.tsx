import React from "react";
import styled from "styled-components";
import { Nav } from "../../components/nav/Nav";
import { Logo } from "../../components/logo/Logo";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 5px;
  border: 1px solid red;
`;
