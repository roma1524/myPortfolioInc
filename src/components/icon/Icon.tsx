import React from "react";
import icoSprt from '../../assets/img/icons-sprite.svg'

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      width="59"
      height="42"
      viewBox="0 0 59 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${icoSprt}#${props.iconId}`} />
    </svg>
  );
};
