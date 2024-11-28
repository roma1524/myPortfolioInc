import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { StyledFlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import project1 from "../../../assets/img/project1.png";
import { Container } from "../../../components/Container";
import { S } from "./Works_Styles";

const FirstArrSkills = ['javascript', 'PostgreSQL', 'React', 'redux'];
const SecondArrSkills = ['javascript', 'React Native', 'redux'];


export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle marginBottom={'32px'}>Projects</SectionTitle>
        <StyledFlexWrapper justify={"space-between"} wrap={"wrap"} gap={'20px'}>
          <Work
          skillsArr={FirstArrSkills}
            src={project1}
            title={"TITLE PROJECT"}
            text={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
          />
          <Work
          skillsArr={SecondArrSkills}
            src={project1}
            title={"INSIGHTGRAM"}
            text={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
          />
          <Work
          skillsArr={FirstArrSkills}
            src={project1}
            title={"TITLE PROJECT"}
            text={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
          />
          <Work
          skillsArr={SecondArrSkills}
            src={project1}
            title={"INSIGHTGRAM"}
            text={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
          />
        </StyledFlexWrapper>
      </Container>
    </S.Works>
  );
};
