import styled from "styled-components";

export const Label = styled.label`
  display: block;
  text-align: left;
  margin: 0.5rem 0;
  text-transform: capitalize;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
`;
