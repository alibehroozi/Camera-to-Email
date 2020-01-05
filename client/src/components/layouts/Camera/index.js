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
  imageCaptured: () => Promise<void>,
  videoRef: React.ElementRef<any>,
  canvasRef: React.ElementRef<any>,
  isCaptured?: boolean,
  imageDone: () => Promise<void>,
  imageCanceled: () => void
};

const CameraLayout = ({
  videoStream,
  supportCamera,
  imageCaptured,
  videoRef,
  canvasRef,
  isCaptured,
  imageDone,
  imageCanceled
}: Props) => {
  return (
    <CameraWrapper>
      {supportCamera ? (
        <>
          <StyledView
            videoStream={videoStream}
            videoRef={videoRef}
            canvasRef={canvasRef}
            isCaptured={isCaptured}
          />
          <StyledControllers
            onDone={imageDone}
            onCancel={imageCanceled}
            imageCaptured={imageCaptured}
            isCaptured={isCaptured}
          />
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
