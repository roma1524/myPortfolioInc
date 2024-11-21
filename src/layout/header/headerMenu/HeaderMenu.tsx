import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";



export const HeaderMenu = (props: {menuList: Array<string>}) => {
  return (
    <StyledHeaderNav>
      <ul>
        
        {props.menuList.map((item, index) => {
          return (
          <StyledHeaderLi key={index}>
          
            <Link href="#">{item}</Link>
          
          </StyledHeaderLi>
          )
        })}
        
      </ul>
    </StyledHeaderNav>
  );
};

const StyledHeaderNav = styled.nav`

  ul {
    display: flex;
    gap: 40px;
  }
`;

const StyledHeaderLi = styled.li`
`;

 const Link = styled.a`
     display: flex;
    padding: 12px 20px;
    color: ${theme.color.font};
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0%;

    border-radius: 6px;
    cursor: pointer;

    &:hover {
      color: #ffffff;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      background-color: rgb(82, 34, 208);

      transition: all .3s;
    }
 `