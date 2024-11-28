import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { StyledFlexWrapper } from "../../components/FlexWrapper";
import { DesctopMenu } from "./headerMenu/desctopMenu/DesctopMenu";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import { S } from "./Header_Styles";

export const navListItems = ["Projects", "Contact"];

export const Header: React.FC = () => {

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoinr = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [])

  return (
    <S.Header>
      <Container>
        <StyledFlexWrapper justify={"space-between"}>
          <Logo />
          {width < breakpoinr ? <MobileMenu menuList={navListItems}/> : <DesctopMenu menuList={navListItems} />}         
        </StyledFlexWrapper>
      </Container>
    </S.Header>
  );
};