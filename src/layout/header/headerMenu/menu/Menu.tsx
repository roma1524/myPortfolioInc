import React from "react"
import { S } from "../HeaderMenu_Styles";

export const Menu: React.FC<{menuList: Array<string>}> = (props: { menuList: Array<string> }) => {
    return (
        <ul>
          {props.menuList.map((item, index) => {
            return (
              <S.MobileLi key={index}>
                <S.Link href="#">
                  {item}
                </S.Link>
              </S.MobileLi>
            );
          })}
        </ul>
    )
}