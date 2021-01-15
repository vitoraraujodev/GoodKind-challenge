import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

// @ts-ignore
import { setStorytellers } from "./redux/actions/storytellerActions";
// @ts-ignore
import { StorytellerInterface } from "./redux/reducers/storytellerReducer";

import users from "./data.json";

// @ts-ignore
import normalizeData from "./services/normalizr";

import GlobalStyles from "./styles";

function App() {
  const dispatch = useDispatch();

  const storytellers = useSelector((state: StorytellerInterface) => {
    console.log(state);
  });

  useEffect(() => {
    const normalizedUsers = normalizeData(users);
    console.log(normalizedUsers);
    // dispatch(setStorytellers(normalizedUsers));
  });

  useEffect(() => {
    console.log(storytellers);
  }, [storytellers]);

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById("root")
);
