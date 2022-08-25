import styled from "styled-components";

export const Input = styled.input`
  width: 31.5rem;
  background: ${({ theme }) => theme.white};
  padding: 1rem;
  font-size: 1rem;
  border: transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.grey5};
  letter-spacing: ${({ theme }) => theme.spacing};
`;

export const FormRowInput = styled(Input)`
  width: 100%;
  height: 2.25rem;
`;
