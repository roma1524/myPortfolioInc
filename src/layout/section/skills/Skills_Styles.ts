import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Skills = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  @media ${theme.media.mobile} {
    margin-bottom: 100px;
  }

`;

// ============ Skill ============

const Skill = styled.div`
  max-width: 120px;
  width: 100%;
  min-height: 164px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  /* @media ${theme.media.mobile} {
    width: 88px;
    min-height: 120px;
  } */
`;

const SkillTitle = styled.h5`
  color: ${theme.color.font};
  font-size: 16px;
  font-weight: 400;

  text-transform: uppercase;
`;

export const S = {
    Skills,
    Skill,
    SkillTitle
}