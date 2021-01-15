import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import CheckBoxInput from "../CheckBoxInput";

import {
  TableContainer,
  Table,
  VerifyButton,
  PlanTag,
  TableButtons,
  DeleteButton,
  EditButton,
  PageButton
} from "./styles";

// @ts-ignore
import { StorytellerInterface } from "./redux/reducers/storytellerReducer";

export default function Table() {
  const storytellers = useSelector(
    (state: any) => state.storytellerReducer.storytellers
  );

  const companies = useSelector(
    (state: any) => state.storytellerReducer.companies
  );

  const plans = useSelector((state: any) => state.storytellerReducer.plans);

  useEffect(() => {
    console.log("st", storytellers);
  }, [storytellers]);

  useEffect(() => {
    console.log("c", companies);
  }, [companies]);

  useEffect(() => {
    console.log("p", plans);
  }, [plans]);

  const [allSelected, setAllSelected] = useState(false);

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
            <th style={{ textAlign: "left" }}>Storyteller</th>
            <th style={{ textAlign: "left" }}>Daily Capacity</th>
            <th style={{ textAlign: "center" }}>Verification</th>
            <th style={{ textAlign: "center" }}>Tags</th>
          </tr>
        </thead>

        <tbody>
          {Object.values(storytellers).map(storyteller => (
            <tr key={storyteller.id}>
              <td>
                <CheckBoxInput
                  value={allSelected}
                  onChangeValue={() => setAllSelected(!allSelected)}
                />
              </td>
              <td>{storyteller.name}</td>
              <td>
                {plans[companies[storyteller.company].plan].dayCapacity}{" "}
                stories/day
              </td>
              <td align="center">
                <VerifyButton type="button" verified={storyteller.verification}>
                  {storyteller.verification ? "Verified" : "Verify"}
                </VerifyButton>
              </td>
              <td align="center">
                <PlanTag>
                  {plans[companies[storyteller.company].plan].tag}
                </PlanTag>
              </td>
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
