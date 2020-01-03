//@flow
import styled from "styled-components";

export const TypoWrapper = styled.div`
  color: ${({ textColor }) => textColor};
  font-size: ${({ textFont: { fontSize } }) => fontSize}px;
  font-family: "${({ textFont: { fontFamily } }) => fontFamily}";
  font-weight: ${({ textFont: { fontWeight } }) => fontWeight};
`;
