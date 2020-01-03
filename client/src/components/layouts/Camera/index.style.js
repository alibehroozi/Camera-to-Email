//@flow
import styled from "styled-components";
import Controllers from "components/Camera/Controllers";
import View from "components/Camera/View";
import Typography from "components/shared/Typography";

export const CameraWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const StyledView = styled(View)`
  flex-grow: 1;
  flex-shrink: 1;
`;

export const StyledControllers = styled(Controllers)`
  width: 100%;
  flex-basis: 100px;
  flex-grow: 0;
  flex-shrink: 0;
`;

export const NoSupportText = styled(Typography)``;
