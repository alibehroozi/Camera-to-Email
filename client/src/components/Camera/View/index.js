import React, { useRef, useEffect } from "react";
import { CameraVideo, ViewWrapper } from "./index.style";

type Props = {
  videoStream: MediaStream,
  className: string
};

const CameraView = ({ videoStream, className }) => {
  const videoRef = useRef();
  const videoStreamId = videoStream.id;
  useEffect(() => {
    if (videoRef.current && videoStream.id) {
      videoRef.current.srcObject = videoStream;
    }
  }, [videoStreamId]);
  return (
    <ViewWrapper className={className}>
      <CameraVideo ref={videoRef} autoPlay />
    </ViewWrapper>
  );
};

export default CameraView;
