//@flow
import * as React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import CameraLayout from "components/layouts/Camera";
import {
  initCanvas,
  captureFrameToCanvas,
  getCanvasImageBlob,
  postImageToServer
} from "helpers";

const CameraPage = () => {
  const [supportCamera: boolean, setSupportCamera] = useState(true);
  const [isCaptured: boolean, setCaptured] = useState(false);
  const [videoStream, setVideoStream] = useState(new MediaStream());
  const videoRef = useRef();
  const canvasRef: React.ElementRef<any> = useRef();

  // capture the image on canvas
  const handleImageCapture = useCallback(async () => {
    if (videoRef.current) {
      const canvas = initCanvas(canvasRef.current, videoRef.current);
      const videoTracks = videoStream.getVideoTracks();
      if (videoTracks.length) {
        try {
          const trackSize = videoTracks[0].getSettings();
          const imageSize = {
            width: trackSize.width || canvas.width,
            height: trackSize.height || canvas.height
          };

          captureFrameToCanvas(canvas, videoRef.current, imageSize);
          setCaptured(true);
        } catch (error) {
          /* handle unexpected error in generating canvas */
          alert("Error!");
        }
      } else {
        /* handle no track */
        alert("Error!");
      }
    }
  }, [videoStream]);

  // send image from canvas to server
  const handleDoneImage = async () => {
    if (canvasRef.current) {
      setCaptured(false);
      const blob = await getCanvasImageBlob(canvasRef.current);
      postImageToServer(canvasRef.current.width, canvasRef.current.height, blob)
        .then(({ status, data }) => {
          if (data.ok) {
            // show user that successfully image sended
            return alert("Sent");
          }
          alert("Error!");
        })
        .catch(() => {
          alert("Error!");
          /* handle sending error */
        });
    }
  };

  // set captured to false so user can continue filming
  const handleCancelImage = () => {
    setCaptured(false);
  };

  useEffect(() => {
    // check if browser supports media devices stream
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: { ideal: "environment" } } })
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
      canvasRef={canvasRef}
      isCaptured={isCaptured}
      imageDone={handleDoneImage}
      imageCanceled={handleCancelImage}
      imageCaptured={handleImageCapture}
    />
  );
};

export default CameraPage;
