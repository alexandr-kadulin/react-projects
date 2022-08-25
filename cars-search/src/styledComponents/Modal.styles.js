import styled from "styled-components";

export const ModalContainer = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWrapper = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem 1rem;
  text-align: center;

  h4 {
    line-height: 1.5;
    padding: 0 2rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.grey5};
  }
`;
