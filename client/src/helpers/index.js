//@flow
import * as axios from "axios";

export const captureFrameToCanvas = (
  canvas: HTMLCanvasElement,
  videoElement: HTMLVideoElement,
  { width, height }: { width: number, height: number }
) => {
  const hRatio = canvas.width / width;
  const vRatio = canvas.height / height;
  const ratio = Math.max(hRatio, vRatio);
  const shiftX = (canvas.width - width * ratio) / 2;
  const shiftY = (canvas.height - height * ratio) / 2;
  const context = canvas.getContext("2d");
  context.drawImage(
    videoElement,
    0,
    0,
    width,
    height,
    shiftX,
    shiftY,
    width * ratio,
    height * ratio
  );
};

export const getCanvasImageBlob = (canvas: HTMLCanvasElement) => {
  return new Promise<Blob>(resolve => {
    canvas.toBlob(blob => {
      resolve(blob);
    }, "image/png");
  });
};

export const postImageToServer = (blob: Blob) => {
  return axios({
    method: "post",
    url: "http://localhost:8000/send/pdf",
    data: {
      image: blob
    }
  }).then(response => {
    return {
      status: response.status,
      data: response.data
    };
  });
};

export const initCanvas = (
  videoElement: HTMLVideoElement
): HTMLCanvasElement => {
  const canvas = document.createElement("canvas");
  const {
    width: videoWidth,
    height: videoHeight
  } = videoElement.getBoundingClientRect();
  canvas.width = videoWidth;
  canvas.height = videoHeight;
  return canvas;
};
