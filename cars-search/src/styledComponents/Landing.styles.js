import styled from "styled-components";

export const LandingWrapper = styled.section`
  min-height: calc(100vh - 6rem * 2);
  width: 90vw;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.width};

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    span {
      color: ${({ theme }) => theme.primary5};
    }
  }

  p {
    color: ${({ theme }) => theme.grey6};
    margin: 1.5rem 0;
  }

  img {
    width: 90%;
    display: block;
  }

  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    h1 {
      margin-top: 0;
      font-size: 3.5rem;
    }
  }
`;

export const LandingColumn = styled.section`
  margin-bottom: 2.5rem;

  @media screen and (min-width: 992px) {
    flex: 0 0 calc(50% - 2rem);
    align-self: center;
    margin-bottom: 0;
  }
`;
