import styled from "styled-components";

export const Form = styled.form`
  width: 90vw;
  max-width: ${({ register }) => (register ? "23rem" : "32rem")};
  border-top: ${({ register, theme }) =>
    register && `5px solid ${theme.primary5}`};
  background: ${({ theme }) => theme.grey50};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow2};
  padding: 1rem 2rem;
  margin: 0 auto;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow4};
  }
`;

export const ControlsForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
