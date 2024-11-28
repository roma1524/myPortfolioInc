import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";

export const MobileMenu: React.FC<{ menuList: Array<string> }> = (props: { menuList: Array<string> }) => {
  return (
    <S.MobileNav>
      <S.BurgerButton isOpen={false}>
        <span />
      </S.BurgerButton>
      <S.MobileMenuPopap isOpen={false}>
      <Menu menuList={props.menuList}/>
      </S.MobileMenuPopap>
    </S.MobileNav>
  );
};
