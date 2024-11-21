import React from "react";
import styled from "styled-components";
import { Nav } from "../../components/nav/Nav";
import { navListItems } from "../header/Header";
import { Icon } from "../../components/icon/Icon";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocialIconsList>
        <StyledSocialItem>
          <StyledSocialItemLink href="#">
            <Icon
              height={"21px"}
              width={"21px"}
              view={"0 0 21px 21px"}
              iconId={"mail"}
            />
          </StyledSocialItemLink>
          <StyledFooterTitle>gmail</StyledFooterTitle>
        </StyledSocialItem>

        <StyledSocialItem>
          <StyledSocialItemLink href="#">
            <Icon
              height={"21px"}
              width={"21px"}
              view={"0 0 21px 21px"}
              iconId={"linked"}
            />
          </StyledSocialItemLink>
          <StyledFooterTitle>linkedin</StyledFooterTitle>
        </StyledSocialItem>

        <StyledSocialItem>
          <StyledSocialItemLink href="#">
            <Icon
              height={"21px"}
              width={"21px"}
              view={"0 0 21px 21px"}
              iconId={"git"}
            />
          </StyledSocialItemLink>
          <StyledFooterTitle>GITHUB</StyledFooterTitle>
        </StyledSocialItem>
      </StyledSocialIconsList>

      <Nav menuList={navListItems} />

      <StyledCopyright>WEB DEVELOPER 2021</StyledCopyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 0 100px 0;
  outline: 1px solid red;

  & Nav{
    color: red;
  }
`;

const StyledSocialIconsList = styled.ul`
  display: flex;
  gap: 15px;
`;

const StyledSocialItem = styled.li`
  display: flex;
  flex-direction: column;
`;

const StyledFooterTitle = styled.span`

  font-size: 12px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
`;

const StyledSocialItemLink = styled.a``;

const StyledCopyright = styled.small`
  display: inline-block;
  font-size: 14px;
  line-height: 26px;
`;
