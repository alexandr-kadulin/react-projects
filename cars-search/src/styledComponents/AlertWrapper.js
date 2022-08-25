import styled from "styled-components";

const AlertWrapper = styled.div`
  height: 2.25rem;
  padding: 0.375rem 0.75rem;
  margin-bottom: 1rem;
  border-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: center;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  color: ${({ theme, alertType }) =>
    alertType === "danger" ? theme.darkRed : theme.darkGreen};
  background: ${({ theme, alertType }) =>
    alertType === "danger" ? theme.lightRed : theme.lightGreen};
`;

export default AlertWrapper;
