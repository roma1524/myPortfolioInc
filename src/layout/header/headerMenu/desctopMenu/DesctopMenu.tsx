import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";


export const DesctopMenu: React.FC<{menuList: Array<string>}> = (props: {menuList: Array<string>}) => {
  return (
    <S.DesctopNav>
      <Menu menuList={props.menuList}/>
    </S.DesctopNav>
  );
};