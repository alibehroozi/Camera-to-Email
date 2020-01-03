//@flow
import React from "react";
import Typography from ".";
import renderer from "react-test-renderer";

describe("<Typography />", () => {
  it("checks the text to be existed", () => {
    const wrapper = renderer
      .create(
        <Typography
          color="red"
          font={{
            fontSize: 20,
            fontWeight: 500,
            fontFamily: "Gudea"
          }}
        >
          mieterengel
        </Typography>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
