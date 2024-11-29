import React from "react";
import icoSprt from '../../assets/img/icons-sprite.svg'
import styled from "styled-components";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  view?: string
};

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
  return (
    <StyledSvg
      width= {props.width || '120px'}
      height= {props.height || '120px'}
      viewBox= {props.view || "0 0 120 120"} fill="none" xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${icoSprt}#${props.iconId}`} />
    </StyledSvg>
  );
};

const StyledSvg = styled.svg`
  display: inline-block;
`