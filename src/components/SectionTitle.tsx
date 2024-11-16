import styled from "styled-components";
import { theme } from "../styles/Theme";

type SectionTitlePropsType = {
    marginBottom?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  color: ${theme.color.font};
  font-size: 24px;
  font-weight: 600;

  margin-bottom: ${props => props.marginBottom || 0};
`;
