//@flow
import * as React from "react";
import { TypoWrapper } from "./index.style";

type Props = {
  font: { fontSize: number, fontFamily: string, fontWeight: number },
  color: string,
  children: React.Node
};

const Typography = ({ font, color, children }: Props) => {
  return (
    <TypoWrapper textFont={font} textColor={color}>
      {children}
    </TypoWrapper>
  );
};

export default Typography;
