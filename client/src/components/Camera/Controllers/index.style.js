//@flow
import styled, { css } from "styled-components";
import Typography from "components/shared/Typography";

export const ControllersWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
`;

export const CancelButton = styled(Typography)`
  flex-shrink: 0;
  flex-grow: 0;
  min-width: 75px;
  cursor: pointer;
  text-align: center;
`;

export const DoneButton = styled(Typography)`
  flex-shrink: 0;
  cursor: pointer;
  text-align: center;
  min-width: 75px;
  flex-grow: 0;
`;

export const CaptureButton = styled.div`
  content: "";
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #ce0b35;
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;
  ${({ isHidden }) =>
    isHidden &&
    css`
      display: none;
    `}
  :active {
    background: #fff;
  }
  ::after {
    position: absolute;
    content: "";
    width: 60px;
    height: 60px;
    margin-top: -5px;
    margin-left: -5px;
    border: 3px solid #ce0b35;
    border-radius: 100%;
  }
`;
