//@flow
import React from "react";
import AppGlobalStyles from "./globalStyles";
import Typography from "components/shared/Typography";

const App = () => {
  return (
    <>
      <AppGlobalStyles />
      <Typography
        color="red"
        font={{
          fontSize: 20,
          fontWeight: 500,
          fontFamily: "Gudea"
        }}
      >
        let's get started
      </Typography>
    </>
  );
};

export default App;
