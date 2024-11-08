import React from "react";
import styled from "styled-components";
// import sk1 from '../../../../assets/img/sk1.png'
import { Icon } from "../../../../components/icon/Icon";


type SkillPropsType = {
    iconId: string
    title: string
}


export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      {/* <img src={sk1} alt="javaScript" /> */}
      <Icon iconId={props.iconId} />
      <StyledSkillTitle>{props.title}</StyledSkillTitle>
    </StyledSkill>
  );
};


const StyledSkill = styled.div`
    width: 120px;
    min-height: 164px;

    display: flex;
    flex-direction: column;
`

const StyledSkillTitle = styled.div`
    
`

