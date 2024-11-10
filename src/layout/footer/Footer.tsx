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
            <Icon height={'21px'} width={'21px'} view={'0 0 21px 21px'} iconId={"mailSvg"} />
          </StyledSocialItemLink>
            <span>gmail</span>
        </StyledSocialItem>

        <StyledSocialItem>
          <StyledSocialItemLink href="#">
            <Icon height={'21px'} width={'21px'} view={'0 0 21px 21px'} iconId={"linkedSvg"} />
          </StyledSocialItemLink>
            <span>linkedin</span>
        </StyledSocialItem>

        <StyledSocialItem>
          <StyledSocialItemLink href="#">
            <Icon height={'21px'} width={'21px'} view={'0 0 21px 21px'} iconId={"gitSvg"} />            
          </StyledSocialItemLink>
          <span>GITHUB</span>
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
    padding: 20px 0;
`;

const StyledSocialIconsList = styled.ul`
    display: flex;
    gap: 15px;
`;

const StyledSocialItem = styled.li`
    display: flex;
    flex-direction: column;
`;

const StyledSocialItemLink = styled.a`

`;

const StyledCopyright = styled.small``;
