import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { render } from "react-dom";
import { Provider } from "react-redux";
// import { axios } from "axios";

import store from "./redux/store";

// @ts-ignore
import { setStorytellers } from "./redux/actions/storytellerActions";

import usersJson from "./data.json";

import Table from "./components/Table";

// @ts-ignore
import normalizeData from "./services/normalizr";

import { PageWrapper, PageContent } from "./index.styles";

import GlobalStyles from "./styles";

function App() {
  const dispatch = useDispatch();

  // Using API
  //
  // async function loadUsers() {
  //   const response = await axios.get("http://123.123.123/users");
  //   const normalizedUsers = normalizeData(response.data);
  //   dispatch(setStorytellers(normalizedUsers.entities));
  // }
  //
  // useEffect(() => {
  //   loadUsers() {
  // }, []);

  // Using local json
  useEffect(() => {
    const normalizedUsers = normalizeData(usersJson);
    dispatch(setStorytellers(normalizedUsers.entities));
  }, []);

  return (
    <PageWrapper>
      <PageContent>
        <Table />
      </PageContent>
    </PageWrapper>
  );
}

render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById("root")
);
