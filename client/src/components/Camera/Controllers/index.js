//@flow
import React from "react";
import {
  ControllersWrapper,
  CaptureButton,
  CancelButton,
  DoneButton
} from "./index.style";

type Props = {
  className: string,
  isCaptured?: boolean,
  imageCaptured: () => Promise<void>,
  onDone: () => Promise<void>,
  onCancel: () => void
};

const CameraControllers = ({
  className,
  imageCaptured,
  isCaptured,
  onDone,
  onCancel
}: Props) => {
  return (
    <ControllersWrapper className={className}>
      {isCaptured && (
        <CancelButton
          onClick={onCancel}
          color="#4A4A4A"
          font={{
            fontSize: 20,
            fontWeight: 500,
            fontFamily: "Gudea"
          }}
        >
          Abbruch
        </CancelButton>
      )}
      <CaptureButton onClick={imageCaptured} isHidden={isCaptured} />
      {isCaptured && (
        <DoneButton
          onClick={onDone}
          color="#00848B"
          font={{
            fontSize: 22,
            fontWeight: 500,
            fontFamily: "Gudea"
          }}
        >
          Fertig
        </DoneButton>
      )}
    </ControllersWrapper>
  );
};

export default CameraControllers;
