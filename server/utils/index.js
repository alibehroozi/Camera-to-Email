/*
  It creates a pdf from image and write pdf to given stream
*/
const createPdfFromImage = (
  PDFDocument,
  { path, width, height },
  writeStream
) => {
  const pdfDocument = new PDFDocument();
  pdfDocument.pipe(writeStream);
  pdfDocument.image(path, {
    fit: [width, height],
    align: "center",
    valign: "center"
  });
  pdfDocument.end();
};

/*
  It sends an email with given message using a transporter
*/
const sendEmailWithAttachment = (transporter, message) => {
  return new Promise((resolve, reject) => {
    console.log(message);
    transporter.sendMail(message, err => {
      if (!err) {
        return resolve();
      }
      reject();
    });
  });
};

/*
  It generates a node mailer transporter
*/
const createDirectTransporter = nodemailer => {
  transport = nodemailer.createTransport({
    logger: true,
    sendmail: true
  });
  return transport;
};

module.exports = {
  createPdfFromImage,
  sendEmailWithAttachment,
  createDirectTransporter
};
