import React from "react";
import { Nav } from "../../components/nav/Nav";
import { navListItems } from "../header/Header";
import { Icon } from "../../components/icon/Icon";
import { S } from "./Footer_Styles";

const footerSocialLinks = [
  {
    nameId: "mail",
    title: "gmail"
  },
  {
    nameId: "linkedSvg",
    title: "linkedin"
  },
  {
    nameId: "gitSocial",
    title: "GITHUB"
  }
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.SocialIconsList>
        {footerSocialLinks.map((item, index) => {
          return (
            <S.SocialItem key={index}>
              <S.SocialItemLink href="#">
                <Icon
                  height={"21px"}
                  width={"21px"}
                  view={"0 0 21px 21px"}
                  iconId={item.nameId}
                />
              </S.SocialItemLink>
              <S.FooterTitle>{item.title}</S.FooterTitle>
            </S.SocialItem>
          );
        })}

      </S.SocialIconsList>

      <Nav menuList={navListItems} />

      <S.Copyright>WEB DEVELOPER 2021</S.Copyright>
    </S.Footer>
  );
};
