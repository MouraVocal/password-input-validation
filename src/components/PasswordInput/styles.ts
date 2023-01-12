import styled from "styled-components";

export const PasswordInputContainer = styled.div`
  align-items: center;
  justify-content: center;
  border: 1px solid #e1e1e1;
  border-radius: 0.8rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.4rem;
`;

export const StyledPasswordInput = styled.input`
  margin: 0;
  width: 100%;
  height: 2rem;
  border: none;
  background: transparent;
  color: #e1e1e1;

  &:focus {
    outline: none;
  }

  &:svg {
    color: #e1e1e1;
  }
`;

export const PasswordIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background-color: transparent;
  cursor: pointer;
`;
