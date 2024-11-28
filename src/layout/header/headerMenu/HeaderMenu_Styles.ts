import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";


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
`;

const DesctopNav = styled.nav`

  ul {
    display: flex;
    gap: 40px;
  }
`;

const MobileNav = styled.nav`
`;

const MobileLi = styled.li``;

const MobileMenuPopap = styled.div<{isOpen: boolean}>`
  position: fixed;
  background-color: rgba(4, 31, 49, 0.9);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 9999;
  display: none;

  ${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
`;

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  width: 100px;
  height: 100px;
  top: 0;
  right: 0;
  z-index: 999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.color.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{isOpen: boolean}>`
    background-color: rgba(235, 235, 235, 0);
  `}

    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.color.font};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(-45deg) translateY(0);
  `}
    }

    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.color.font};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
    `}
    }
  }
`;

export const S = {
    MobileLi,
    Link,
    DesctopNav,
    MobileNav,
    MobileMenuPopap,
    BurgerButton
}