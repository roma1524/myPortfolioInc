import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 0 100px 0;
`;

const SocialIconsList = styled.ul`
  display: flex;
  gap: 15px;
`;

const SocialItem = styled.li`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.span`

  font-size: 12px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
`;

const SocialItemLink = styled.a`
    svg {
        display: inline-block;
        width: 21px;
        fill: red;
    }
`;

const Copyright = styled.small`
  display: inline-block;
  font-size: 14px;
  line-height: 26px;
`;

export const S = {
    Footer,
    SocialIconsList,
    SocialItem,
    FooterTitle,
    SocialItemLink,
    Copyright
}