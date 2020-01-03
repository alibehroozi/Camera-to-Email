import React from "react";
import {
  ControllersWrapper,
  CaptureButton,
  CancelButton,
  DoneButton
} from "./index.style";

type Props = {};

const CameraControllers = ({ className }) => {
  return (
    <ControllersWrapper className={className}>
      <CancelButton
        color="#4A4A4A"
        font={{
          fontSize: 20,
          fontWeight: 500,
          fontFamily: "Gudea"
        }}
      >
        Abbruch
      </CancelButton>
      <CaptureButton />
      <DoneButton
        color="#00848B"
        font={{
          fontSize: 22,
          fontWeight: 500,
          fontFamily: "Gudea"
        }}
      >
        Fertig
      </DoneButton>
    </ControllersWrapper>
  );
};

export default CameraControllers;
