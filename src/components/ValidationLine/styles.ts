import styled from "styled-components";
import { IValidationContainer } from "./types";

export const ValidationLineContainer = styled.div<IValidationContainer>`
  display: flex;
  gap: 0.8rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${({ isValid }) => (isValid ? "lightgreen" : "gray")};
`;

export const StyledParagraph = styled.p``;
