//@flow
import * as React from "react";
import { TypoWrapper } from "./index.style";

type Props = {
  font: { fontSize: number, fontFamily: string, fontWeight: number },
  color: string,
  children: React.Node,
  className?: string
};

const Typography = ({ font, color, children, className }: Props) => {
  return (
    <TypoWrapper className={className} textFont={font} textColor={color}>
      {children}
    </TypoWrapper>
  );
};

export default Typography;
