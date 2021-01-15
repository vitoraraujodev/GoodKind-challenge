import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// @ts-ignore
import {
  saveStoryteller,
  verifyStoryteller,
  deleteStorytellers
} from "../../redux/actions/storytellerActions";

import CheckBox from "../CheckBox";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(
    Math.ceil(Object.values(storytellers).length / 5)
  );
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

  useEffect(() => {
    // If is selected other storyteller during edit, stop editing
    if (editing) {
      setEditing(false);
      setName("");
    }
  }, [selectedStorytellers.length]);

  // If maxPage changes, check user page to redirect
  useEffect(() => {
    if (maxPage && currentPage > maxPage) setCurrentPage(maxPage);
  }, [maxPage]);

  useEffect(() => {
    // Updates max page on change of storytellers
    const newMax = Math.ceil(Object.values(storytellers).length / 5);
    if (newMax !== maxPage) setMaxPage(newMax);
  }, [storytellers]);

  // Verifys storyteller
  function handleVerification(id: number) {
    dispatch(verifyStoryteller(id));
  }

  function handlePage(page: number) {
    if (
      (page === -1 && currentPage > 1) ||
      (page === 1 && currentPage < maxPage)
    )
      setCurrentPage(currentPage + page);
  }

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>
              <CheckBox
                value={
                  Object.values(storytellers).length > 0 &&
                  selectedStorytellers.length ===
                    Object.values(storytellers).length
                }
                onChangeValue={handleSelectAll}
              />
            </th>
            <th width="40%" style={{ textAlign: "left" }}>
              Storyteller
            </th>
            <th style={{ textAlign: "left" }}>Daily Capacity</th>
            <th style={{ textAlign: "center" }}>Verification</th>
            <th style={{ textAlign: "center" }}>Tags</th>
          </tr>
        </thead>

        <tbody>
          {Object.values(storytellers)
            .slice((currentPage - 1) * 5, currentPage * 5)
            .map(storyteller => (
              <tr key={storyteller.id}>
                <td>
                  <CheckBox
                    value={selectedStorytellers.includes(storyteller.id)}
                    onChangeValue={() => handleSelect(storyteller.id)}
                  />
                </td>
                <td>
                  {editing && selectedStorytellers[0] === storyteller.id ? (
                    <input
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
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
                    onClick={() => {
                      if (!storyteller.verification)
                        handleVerification(storyteller.id);
                    }}
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
          <span>
            Page {currentPage} of {maxPage}
          </span>
          <PageButton type="button" onClick={() => handlePage(-1)}>
            &#8249;
          </PageButton>
          <PageButton type="button" onClick={() => handlePage(1)}>
            &#8250;
          </PageButton>
        </div>
      </TableButtons>
    </TableContainer>
  );
}
