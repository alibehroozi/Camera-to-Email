//@flow
import * as React from "react";
import { useEffect } from "react";
import { CameraVideo, ViewWrapper, CapturedImageCanvas } from "./index.style";

type Props = {
  videoRef: React.ElementRef<any>,
  canvasRef: React.ElementRef<any>,
  isCaptured?: boolean,
  videoStream: MediaStream,
  className: string
};

const CameraView = ({
  videoRef,
  canvasRef,
  isCaptured,
  videoStream,
  className
}: Props) => {
  useEffect(() => {
    if (videoRef.current && videoStream.id) {
      videoRef.current.srcObject = videoStream;
    }
  }, [videoStream, videoRef]);
  return (
    <ViewWrapper className={className}>
      <CameraVideo ref={videoRef} autoPlay muted isHidden={isCaptured} />
      <CapturedImageCanvas ref={canvasRef} isHidden={!isCaptured} />
    </ViewWrapper>
  );
};

export default CameraView;
