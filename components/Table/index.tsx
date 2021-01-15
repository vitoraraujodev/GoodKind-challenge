import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import CheckBoxInput from "../CheckBoxInput";

import {
  TableContainer,
  Table,
  TableButtons,
  DeleteButton,
  EditButton,
  PageButton
} from "./styles";

// @ts-ignore
import { StorytellerInterface } from "./redux/reducers/storytellerReducer";

export default function Table() {
  // const storytellers = useSelector(
  //   (state: StorytellerInterface) => state.storytellerReducer
  // );

  const [allSelected, setAllSelected] = useState(false);

  const storytellers = [
    {
      id: 1,
      name: "Michael Warshfsky",
      dailyCapacity: 10,
      verification: false,
      tag: "2020 VIP"
    },
    {
      id: 1,
      name: "Michael Warshfsky",
      dailyCapacity: 10,
      verification: false,
      tag: "2020 VIP"
    }
  ];

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>
              <CheckBoxInput
                value={allSelected}
                onChangeValue={() => setAllSelected(!allSelected)}
              />
            </th>
            <th>Storyteller</th>
            <th>Daily Capacity</th>
            <th style={{ textAlign: "center" }}>Verification</th>
            <th style={{ textAlign: "center" }}>Tags</th>
          </tr>
        </thead>

        <tbody>
          {storytellers.map(storyteller => (
            <tr>
              <td>
                <CheckBoxInput
                  value={allSelected}
                  onChangeValue={() => setAllSelected(!allSelected)}
                />
              </td>
              <td>{storyteller.name}</td>
              <td>{storyteller.dailyCapacity} stories/day</td>
              <td align="center">
                {storyteller.verification ? "Verified" : "Verify"}
              </td>
              <td align="center">{storyteller.tag}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <TableButtons>
        <div>
          <DeleteButton type="button">Delete</DeleteButton>
          <EditButton type="button">Edit</EditButton>
        </div>

        <div>
          <span>Page 1</span>
          <PageButton type="button">&#8249;</PageButton>
          <PageButton type="button">&#8250;</PageButton>
        </div>
      </TableButtons>
    </TableContainer>
  );
}
