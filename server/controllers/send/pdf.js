const PDFDocument = require("pdfkit");
const nodemailer = require("nodemailer");
const formidable = require("formidable");
const Stream = require("stream");
const {
  createPdfFromImage,
  createDirectTransporter,
  sendEmailWithAttachment
} = require("../../utils");

/*
  It generates a message object for sending the email
*/
const generateEmailMessage = attachmentStream => {
  return {
    from: process.env.EMAIL_FROM || "behrooziali28@gmail.com",
    to: process.env.EMAIL_TO || "behrooziali28@gmail.com",
    subject: process.env.EMAIL_SUBJECT || "Captured Image",
    text: process.env.EMAIL_TEXT || "Just captured the image...",
    attachments: [
      {
        filename: process.env.EMAIL_ATTACHMENT_FILENAME || "captured.jpg",
        content: attachmentStream
      }
    ]
  };
};

const sendPdf = (request, response, next) => {
  new formidable.IncomingForm().parse(
    request,
    (err, { width, height }, { capturedImage }) => {
      if (err) {
        return response.json({ ok: false });
      }
      // create a pass through stream to pipe pdf to email
      const passThroughStream = Stream.PassThrough();
      createPdfFromImage(
        PDFDocument,
        { path: capturedImage.path, width, height },
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
    }
  );
};

module.exports = sendPdf;
