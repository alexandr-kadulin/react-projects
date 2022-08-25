import styled, { keyframes } from "styled-components";

const spinner = keyframes`
	to {
		transform: rotate(360deg);
	}
`;

const LoadingWrapper = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  border-radius: 50%;
  border: ${({ theme }) => `5px solid ${theme.grey4}`};
  border-top-color: ${({ theme }) => theme.primary5};
  animation: ${spinner} 1s linear infinite;
`;

export default LoadingWrapper;
