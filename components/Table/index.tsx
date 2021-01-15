import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// @ts-ignore
import {
  saveStoryteller,
  verifyStoryteller,
  deleteStorytellers
} from "../../redux/actions/storytellerActions";

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

export default function Table() {
  const dispatch = useDispatch();

  const storytellers = useSelector(
    (state: any) => state.storytellerReducer.storytellers
  );

  const companies = useSelector(
    (state: any) => state.storytellerReducer.companies
  );

  const plans = useSelector((state: any) => state.storytellerReducer.plans);

  // List of selected storytellers ids
  const [selectedStorytellers, setSelectedStorytellers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");

  // Selects all storytellers id if selected length !== storytellers amount, or empty selected storytellers if so.
  function handleSelectAll() {
    if (selectedStorytellers.length === Object.values(storytellers).length) {
      setSelectedStorytellers([]);
    } else {
      setSelectedStorytellers(
        Object.values(storytellers).map(storyteller => storyteller.id)
      );
    }
  }

  // Selects or deselect storyteller's id
  function handleSelect(id: number) {
    if (selectedStorytellers.includes(id)) {
      setSelectedStorytellers(
        selectedStorytellers.filter(storytellerId => storytellerId !== id)
      );
    } else {
      setSelectedStorytellers([...selectedStorytellers, id]);
    }
  }

  function handleDelete() {
    if (selectedStorytellers.length > 0) {
      dispatch(deleteStorytellers(selectedStorytellers));
      setSelectedStorytellers([]);
    }
  }

  // Delete the selected one storyteller
  function handleEdit() {
    if (selectedStorytellers.length === 1) {
      setEditing(true);
      setName(storytellers[selectedStorytellers[0]].name);
    }
  }

  // Saves new name
  function handleSave() {
    storytellers[selectedStorytellers[0]].name = name;
    const newStoryteller = storytellers[selectedStorytellers[0]];
    dispatch(saveStoryteller(newStoryteller));
    setEditing(false);
  }

  // If is selected other storyteller during edit, stop editing
  useEffect(() => {
    if (editing) {
      setEditing(false);
      setName("");
    }
  }, [selectedStorytellers.length]);

  // Verifys storyteller
  function handleVerification(id: number) {
    dispatch(verifyStoryteller(id));
  }

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>
              <CheckBoxInput
                value={
                  Object.values(storytellers).length > 0 &&
                  selectedStorytellers.length ===
                    Object.values(storytellers).length
                }
                onChangeValue={handleSelectAll}
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
                  value={selectedStorytellers.includes(storyteller.id)}
                  onChangeValue={() => handleSelect(storyteller.id)}
                />
              </td>
              <td>
                {editing && selectedStorytellers[0] === storyteller.id ? (
                  <input value={name} onChange={e => setName(e.target.value)} />
                ) : (
                  storyteller.name
                )}
              </td>
              <td>
                {plans[companies[storyteller.company].plan].dayCapacity}{" "}
                stories/day
              </td>
              <td align="center">
                <VerifyButton
                  type="button"
                  verified={storyteller.verification}
                  onClick={() => {if (!storyteller.verification) handleVerification(storyteller.id)}}
                >
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
          <DeleteButton type="button" onClick={handleDelete}>
            Delete
          </DeleteButton>
          <EditButton
            type="button"
            editable={selectedStorytellers.length === 1}
            onClick={editing ? handleSave : handleEdit}
          >
            {editing ? "Save" : "Edit"}
          </EditButton>
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
