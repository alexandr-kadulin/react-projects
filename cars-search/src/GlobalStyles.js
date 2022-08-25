import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	*,
	::after,
	::before {
		box-sizing: border-box;
	}

	html {
		font-size: 100%;
	}

	body {
		background: ${({ theme }) => theme.grey50};
		font-family: ${({ theme }) => theme.bodyFont};
		font-weight: 400;
		line-height: 1.75;
		color: ${({ theme }) => theme.grey9};
	}

	h1,
	h2,
	h3,
	h4,
	h5 {
		margin: 0;
		margin-bottom: 1.38rem;
		font-family: ${({ theme }) => theme.headingFont};
		font-weight: 400;
		line-height: 1.3;
		text-transform: capitalize;
		letter-spacing: ${({ theme }) => theme.letterSpacing};
	}

	h1 {
		margin-top: 0;
		font-size: 3.052rem;
	}

	h2 {
		font-size: 2.441rem;
		margin-bottom: 0rem;
	}

	h3 {
		font-size: 1.953rem;
	}

	h4 {
		font-size: 1.563rem;
	}

	h5 {
		font-size: 1.25rem;
		margin-bottom: 0;
	}
`;

export default GlobalStyles;
