import styled from "styled-components";

export const TableContainer = styled.div`
  padding: 24px 16px;
`;

export const Table = styled.table`
  min-width: 640px;

  border-collapse: collapse;

  tr {
    padding: 16px;
  }

  th + th,
  td + td {
    padding-left: 8px;
  }

  th {
    color: #888;
  }

  td {
    font-weight: 400;
  }
`;

export const TableButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      margin-right: 16px;
      font-size: 15px;
      color: #acacac;
    }
  }
`;

export const DeleteButton = styled.button`
  width: 104px;
  height: 32px;
  border: 2px solid #ee4d64;
  border-radius: 6px;
  font-size: 18px;
  color: #ee4d64;
  background: #fff;

  &:hover {
    background: #f6f6f6;
  }
  &:focus {
    border: 2px solid #ee4d64;
    outline: none;
  }
  &:active {
    background: #f0f0f0;
  }
`;

export const EditButton = styled.button`
  margin-left: 8px;
  width: 104px;
  height: 32px;
  border: 0;
  border-radius: 6px;
  font-size: 18px;
  color: #ee4d64;
  background: #fff;

  &:hover {
    background: #f6f6f6;
  }
  &:focus {
    outline: none;
  }
  &:active {
    background: #f0f0f0;
  }
`;

export const PageButton = styled.button`
  height: 32px;
  width: 32px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 24px;
  color: #666;
  background: #f6f6f6;

  & + button {
    margin-left: 8px;
  }

  &:hover {
    background: #f2f2f2;
  }
  &:focus {
    outline: none;
  }
  &:active {
    background: #eee;
  }
`;
