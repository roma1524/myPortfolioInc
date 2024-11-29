import React, { useState } from "react";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";

export const MobileMenu: React.FC<{ menuList: Array<string> }> = (props: {
  menuList: Array<string>;
}) => {
  const [menuIsOpen, setmenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => {
    setmenuIsOpen(!menuIsOpen);
  };

  return (
    <S.MobileNav>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span />
      </S.BurgerButton>
      <S.MobileMenuPopap isOpen={menuIsOpen} onClick={ () => {setmenuIsOpen(false)} }>
        <Menu menuList={props.menuList} />
      </S.MobileMenuPopap>
    </S.MobileNav>
  );
};
