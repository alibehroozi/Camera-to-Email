import styled from "styled-components";
import Controllers from "components/Camera/Controllers";
import View from "components/Camera/View";

export const CameraWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const StyledView = styled(View)`
  width: 100%;
  flex-grow: 1;
  flex-shrink: 0;
`;

export const StyledControllers = styled(Controllers)`
  width: 100%;
  height: 100px;
  flex-grow: 0;
  flex-shrink: 0;
`;
