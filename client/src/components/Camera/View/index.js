//@flow
import * as React from "react";
import { useEffect } from "react";
import { CameraVideo, ViewWrapper } from "./index.style";

type Props = {
  videoRef: React.ElementRef<any>,
  videoStream: MediaStream,
  className: string
};

const CameraView = ({ videoRef, videoStream, className }: Props) => {
  useEffect(() => {
    if (videoRef.current && videoStream.id) {
      videoRef.current.srcObject = videoStream;
    }
  }, [videoStream, videoRef]);
  return (
    <ViewWrapper className={className}>
      <CameraVideo ref={videoRef} autoPlay muted />
    </ViewWrapper>
  );
};

export default CameraView;
