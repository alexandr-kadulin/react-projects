import styled from "styled-components";

export const TableWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-width: ${({ theme }) => theme.width};

  table * {
    font-size: 1.25rem;
  }

  table {
    border-collapse: collapse;
    table-layout: fixed;
  }

  th,
  td {
    border: ${({ theme }) => `1px solid ${theme.white}`};
    text-align: left;
    padding: 0.25rem;
  }

  th {
    background-color: ${({ theme }) => theme.primary5};
    text-transform: uppercase;
  }

  td {
    background-color: ${({ theme }) => theme.primary1};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const TableHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
