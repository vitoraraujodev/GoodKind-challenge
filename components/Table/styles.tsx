import styled from "styled-components";

export const TableContainer = styled.div`
  padding: 24px 16px;
`;

export const Table = styled.table`
  min-width: 640px;
  border-collapse: collapse;

  th + th,
  td + td {
    padding-left: 8px;
  }

  th {
    padding-bottom: 16px;
  }

  td {
    padding: 8px 0;
  }

  tr + tr {
    border-top: 1px solid #ddd;
  }

  th {
    color: #888;
  }
`;

export const VerifyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  height: 24px;
  border: 0;
  border-radius: 6px;
  font-size: 15px;
  color: ${props => (props.verified ? "#2CA42B" : "#ee4d64")};
  font-weight: bold;
  background: ${props => (props.verified ? "#DFF0DF" : "#fff")};

  &:hover {
    background: ${props => (props.verified ? "" : "#f4f4f4")};
  }

  &:active {
    background: ${props => (props.verified ? "" : "#f4f4f4")};
  }
`;

export const PlanTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  height: 24px;
  border: 0;
  border-radius: 8px;
  font-size: 14px;
  color: #666;
  font-weight: bold;
  background: #ddd;
`;

export const TableButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding: 0 8px;

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
    background: #f4f4f4;
  }
  &:focus {
    outline: none;
  }
  &:active {
    background: #ededed;
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
    background: #f4f4f4;
  }
  &:focus {
    outline: none;
  }
  &:active {
    background: #ededed;
  }
`;

export const PageButton = styled.button`
  text-align: center;
  height: 32px;
  width: 32px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 24px;
  color: #666;
  background: #f4f4f4;

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
