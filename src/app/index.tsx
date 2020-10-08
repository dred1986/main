import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import ApolloClient from "./graphql/ApolloClient";
import RootRouter from "./routes";

import "./styles/main.css";

render(
  <Provider store={store}>
    <ApolloClient>
      <RootRouter />
    </ApolloClient>
  </Provider>,
  document.getElementById("app")
);
