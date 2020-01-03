//@flow
import React, { useState, useEffect } from "react";
import CameraLayout from "components/layouts/Camera";

type Props = {};

const CameraPage = () => {
  const [supportCamera, setSupportCamera] = useState(true);
  const [videoStream, setVideoStream] = useState("");
  useEffect(() => {
    // check if browser supports media devices stream
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        setVideoStream(stream);
      });
    } else {
      setSupportCamera(false);
    }
  }, []);
  return (
    <CameraLayout supportCamera={supportCamera} videoStream={videoStream} />
  );
};

export default CameraPage;
