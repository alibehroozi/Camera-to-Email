//@flow
import * as React from "react";
import {
  CameraWrapper,
  StyledView,
  StyledControllers,
  NoSupportText
} from "./index.style";

type Props = {
  videoStream: MediaStream,
  supportCamera?: boolean,
  captureDocument: () => Promise<void>,
  videoRef: React.ElementRef<any>
};

const CameraLayout = ({
  videoStream,
  supportCamera,
  captureDocument,
  videoRef
}: Props) => {
  return (
    <CameraWrapper>
      {supportCamera ? (
        <>
          <StyledView videoStream={videoStream} videoRef={videoRef} />
          <StyledControllers captureDocument={captureDocument} />
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
