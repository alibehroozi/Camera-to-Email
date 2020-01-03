import React from "react";

import {
  CameraWrapper,
  StyledView,
  StyledControllers,
  NoSupportText
} from "./index.style";

type Props = {
  videoStream: MediaStream,
  supportCamera?: boolean
};

const CameraLayout = ({ videoStream, supportCamera }) => {
  return (
    <CameraWrapper>
      {supportCamera ? (
        <>
          <StyledView videoStream={videoStream} />
          <StyledControllers />
        </>
      ) : (
        <NoSupportText
          color="#000"
          font={{
            fontSize: 22,
            fontWeight: 500,
            fontFamily: "Gudea"
          }}
        >
          Camera is not supported. Please use another browser
        </NoSupportText>
      )}
    </CameraWrapper>
  );
};

export default CameraLayout;
