const PDFDocument = require("pdfkit");
const nodemailer = require("nodemailer");
const Stream = require("stream");
const {
  createPdfFromImage,
  createDirectTransporter,
  sendEmailWithAttachment
} = require("../../utils");

const generateEmailMessage = attachmentStream => {
  return {
    from: "test@test.com",
    to: "behrooziali28@gmail.com",
    subject: "Captured Image",
    text: "Just captured the image...",
    attachments: [
      {
        filename: "captured.jpg",
        content: attachmentStream
      }
    ]
  };
};

const sendPdf = (request, response, next) => {
  const passThroughStream = Stream.PassThrough();
  const imageWidth = request.body.width;
  const imageHeight = request.body.height;
  const imagePath = request.files.capturedImage;
  createPdfFromImage(
    imagePath,
    { width: imageWidth, height: imageHeight },
    passThroughStream
  );
  const transporter = createDirectTransporter(nodemailer);
  const message = generateEmailMessage(passThroughStream);
  sendEmailWithAttachment(transporter, message)
    .then(() => {
      response.json({ ok: true });
    })
    .catch(() => {
      response.json({ ok: true });
    });
};

module.exports = sendPdf;
