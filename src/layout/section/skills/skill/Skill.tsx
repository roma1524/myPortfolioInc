import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/Theme";

type SkillPropsType = {
  iconId: string;
  title: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} width={'120px'} height={'113px'} view={'"0 0 120 113"'}/>
      <StyledSkillTitle>
        {props.title}
      </StyledSkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 120px;
  min-height: 164px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StyledSkillTitle = styled.h5`
  color: ${theme.color.font};
  font-size: 16px;
  font-weight: 400;

  text-transform: uppercase;
`;
