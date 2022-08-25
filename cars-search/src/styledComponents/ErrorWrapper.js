import styled from "styled-components";

const ErrorWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.grey5};
  }
  a {
    color: ${({ theme }) => theme.primary5};
    text-decoration: underline;
    text-transform: capitalize;
    letter-spacing: ${({ theme }) => theme.letterSpacing};
  }
`;

export default ErrorWrapper;
