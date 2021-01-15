import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

// @ts-ignore
import { setStorytellers } from "./redux/actions/storytellerActions";

import users from "./.mockend.json";

import Table from "./components/Table";

// @ts-ignore
import normalizeData from "./services/normalizr";

import { PageWrapper, PageContent } from "./index.styles";

import GlobalStyles from "./styles";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const normalizedUsers = normalizeData(users);
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
