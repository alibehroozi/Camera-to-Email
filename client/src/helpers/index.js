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

export const postImageToServer = (
  width: number,
  height: number,
  blob: Blob
) => {
  const formData: FormData = new FormData();
  formData.append("width", width.toString());
  formData.append("height", height.toString());
  formData.append("capturedImage", blob);
  return axios
    .post("http://localhost:3003/send/pdf", formData, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data"
      }
    })
    .then(response => {
      return {
        status: response.status,
        data: response.data
      };
    });
};

export const initCanvas = (
  canvas: HTMLCanvasElement,
  videoElement: HTMLVideoElement
): HTMLCanvasElement => {
  const { width, height } = videoElement.getBoundingClientRect();
  canvas.width = width;
  canvas.height = height;
  return canvas;
};
