import { StyledParagraph } from "./styles";
import { FaCircle, FaCheckCircle } from "react-icons/fa";
import { ValidationLineContainer } from "../ValidationLine/styles";
import { IValidationLineProps } from "./types";

export const ValidationLine = ({ text, isValid }: IValidationLineProps) => {
  return (
    <ValidationLineContainer isValid={isValid}>
      {isValid ? <FaCheckCircle /> : <FaCircle />}

      <StyledParagraph>{text}</StyledParagraph>
    </ValidationLineContainer>
  );
};
