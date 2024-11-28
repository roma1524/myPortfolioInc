import React from "react";
import { S } from "../Works_Styles";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
  skillsArr: Array<string>;
};

export const Work = (props: WorkPropsType) => {
  return (
    <S.Work>
      <S.ImgWrapper>
        <S.Image src={props.src} alt="project" />
      </S.ImgWrapper>

      <S.WorkDescr>
        <S.WorkTitle>
          {props.title}
        </S.WorkTitle>

        <S.WorkSkills>
          {props.skillsArr.map(item => {
            return (
              <S.WorkSkillsItem>
                {item}
              </S.WorkSkillsItem>
            );
          })}
        </S.WorkSkills>

        <S.WorkText>
          {props.text}
        </S.WorkText>
      </S.WorkDescr>
    </S.Work>
  );
};
