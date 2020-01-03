//@flow
import React from "react";
import { Router } from "react-router-dom";
import AppGlobalStyles from "./globalStyles";
import Routes from "routes";
import history from "helpers/history";

const App = () => {
  return (
    <>
      <AppGlobalStyles />
      <Router history={history}>
        <Routes />
      </Router>
    </>
  );
};

export default App;
