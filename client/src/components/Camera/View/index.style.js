//@flow
import styled, { css } from "styled-components";

export const ViewWrapper = styled.div`
  width: 100%;
`;

export const CameraVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${({ isHidden }) =>
    isHidden &&
    css`
      display: none;
    `}
`;

export const CapturedImageCanvas = styled.canvas`
  width: 100%;
  height: 100%;
`;
