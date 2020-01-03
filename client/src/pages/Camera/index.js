//@flow
import React, { useState, useEffect, useRef, useCallback } from "react";
import CameraLayout from "components/layouts/Camera";
import {
  initCanvas,
  captureFrameToCanvas,
  getCanvasImageBlob,
  postImageToServer
} from "helpers";

const CameraPage = () => {
  const [supportCamera: boolean, setSupportCamera] = useState(true);
  const [capturing: boolean, setCapturing] = useState(false);
  const [videoStream, setVideoStream] = useState(new MediaStream());
  const videoRef = useRef();

  const captureDocument = useCallback(async () => {
    if (videoRef.current) {
      setCapturing(true);
      const canvas = initCanvas(videoRef.current);
      const videoTracks = videoStream.getVideoTracks();
      if (videoTracks.length) {
        try {
          const trackSize = videoTracks[0].getSettings();
          const imageSize = {
            width: trackSize.width || canvas.width,
            height: trackSize.height || canvas.height
          };
          captureFrameToCanvas(canvas, videoRef.current, imageSize);
          const blob = await getCanvasImageBlob(canvas);
          console.log(blob);
          postImageToServer(blob)
            .then(({ status, data }) => {
              setCapturing(false);
            })
            .catch(() => {
              /* handle sending error */
            });
        } catch (error) {
          /* handle unexpected error in generating canvas */
        }
      } else {
        /* handle no track */
      }
    }
  }, [videoStream]);

  useEffect(() => {
    // check if browser supports media devices stream
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream: MediaStream) => {
          setVideoStream(stream);
        })
        .catch(err => {
          /* handle the error */
        });
    } else {
      setSupportCamera(false);
    }
  }, []);
  return (
    <CameraLayout
      supportCamera={supportCamera}
      videoStream={videoStream}
      videoRef={videoRef}
      capturing={capturing}
      captureDocument={captureDocument}
    />
  );
};

export default CameraPage;
