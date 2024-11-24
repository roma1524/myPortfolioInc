import React from "react";
import icoSprt from '../../assets/img/icons-sprite.svg'
import styled from "styled-components";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  view?: string
};

export const Icon = (props: IconPropsType) => {
  return (
    <StyledSvg
      width= {props.width || '59px'}
      height= {props.height || '42px'}
      viewBox= {props.view || "0 0 59 42"} fill="none" xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${icoSprt}#${props.iconId}`} />
    </StyledSvg>
  );
};

const StyledSvg = styled.svg`
  display: inline-block;
`