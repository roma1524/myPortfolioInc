import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
  skillsArr: Array<string>;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <StyledImage src={props.src} alt="project" />

      <StyledWorkDescr>
        <StyledWorkTitle>
          {props.title}
        </StyledWorkTitle>

        <StyledWorkSkills>
          {props.skillsArr.map(item => {
            return (
              <StyledWorkSkillsItem>
                {item}
              </StyledWorkSkillsItem>
            );
          })}
        </StyledWorkSkills>

        <StyledWorkText>
          {props.text}
        </StyledWorkText>
      </StyledWorkDescr>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  min-height: 636px;
  max-width: 522px;
  width: 100%;
  background-color: rgb(34, 37, 37);

  display: flex;
  flex-direction: column;
  border-radius: 6px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 388px;
  object-fit: cover;
`;

const StyledWorkDescr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 30px 10px 30px 25px;
`;

const StyledWorkTitle = styled.h3`
  color: rgb(217, 242, 242);
  font-size: 20px;
`;

const StyledWorkSkills = styled.ul`
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

const StyledWorkSkillsItem = styled.li`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  border-radius: 4px;

  background: ${theme.color.linearColor};

  color: rgb(31, 38, 38);

  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 12%;
  text-transform: uppercase;
`;

const StyledWorkText = styled.p`
  margin-top: 30px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
