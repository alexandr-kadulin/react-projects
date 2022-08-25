import styled from "styled-components";

const SharedLayoutWrapper = styled.div`
  max-width: ${({ theme }) => theme.width};
  min-height: 6rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  h2 {
    font-weight: 700;
    span {
      color: ${({ theme }) => theme.primary5};
    }
  }
`;

export default SharedLayoutWrapper;
