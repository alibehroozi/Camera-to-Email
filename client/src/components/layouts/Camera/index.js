import React from "react";

import { CameraWrapper, StyledView, StyledControllers } from "./index.style";

type Props = {};

const CameraLayout = () => {
  return (
    <CameraWrapper>
      <StyledView />
      <StyledControllers />
    </CameraWrapper>
  );
};

export default CameraLayout;
