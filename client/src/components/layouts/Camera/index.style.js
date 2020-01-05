//@flow
import styled from "styled-components";
import Controllers from "components/Camera/Controllers";
import View from "components/Camera/View";
import Typography from "components/shared/Typography";

export const CameraWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const StyledView = styled(View)`
  position: absolute;
  top: 0;
  height: calc(100vh - 80px) !important;
`;

export const StyledControllers = styled(Controllers)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
`;

export const NoSupportText = styled(Typography)``;
