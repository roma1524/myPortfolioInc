import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Works = styled.section`
  margin-bottom: 130px;
`;

// =========== Work =============

const Work = styled.div`
  min-height: 636px;
  width: 360px;
  flex-grow: 1;
  background-color: rgb(34, 37, 37);

  display: flex;
  flex-direction: column;
  border-radius: 6px;

  @media ${theme.media.desctop} {
    max-width: 522px;
  }
`;

const ImgWrapper = styled.div`
  position: relative;

  &:hover {
    &::before {
      position: absolute;

      content: '';
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 388px;
  object-fit: cover;
`;

const WorkDescr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 30px 10px 30px 25px;
`;

const WorkTitle = styled.h3`
  color: rgb(217, 242, 242);
  font-size: 20px;
`;

const WorkSkills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 10px;
`;

const WorkSkillsItem = styled.li`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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

const WorkText = styled.p`
  margin-top: 30px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const S = {
    Works,
    Work,
    ImgWrapper,
    Image,
    WorkDescr,
    WorkTitle,
    WorkSkills,
    WorkSkillsItem,
    WorkText
}