import React from "react";

import "./config/ReactotronConfig";

import { Provider } from "react-redux";
import store from "./store";

import { AppContainer } from "~/routes";
import { isAuthenticated } from "./services/auth";

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
