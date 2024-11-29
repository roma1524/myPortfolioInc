import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Contacts = styled.section`
  margin-bottom: 180px;

  @media ${theme.media.mobile} {
    margin-bottom: 150px;
  }
`;

const Form = styled.form`
  max-width: 530px;
  width: 100%;
  min-height: 430px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 165px;
  }
`;

const Field = styled.input`
  width: 100%;
  border: 1px solid ${theme.color.font};
  border-radius: 6px;
  padding: 15px 20px;

  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;

  background: ${theme.color.primaryBg};

  &::placeholder {
    color: ${theme.color.font};
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }

  &:focus-visible {
    outline: 1px solid ${theme.color.font};
  }
`;

const Label = styled.label`
margin-bottom: 30px;
`;

const InputName = styled.span`
  display: inline-block;
  margin-bottom: 10px;

  font-size: 14px;
  line-height: 17px;
  color: ${theme.color.font};
`;

export const S = {
    Contacts,
    Form,
    Field,
    Label,
    InputName
}