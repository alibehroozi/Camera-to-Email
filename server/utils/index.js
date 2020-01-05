const createPdfFromImage = (
  PDFDocument,
  { imagePath, width, height },
  writeStream
) => {
  const pdfDocument = new PDFDocument();
  pdfDocument.pipe(writeStream);
  pdfDocument.image(imagePath, {
    fit: [width, height],
    align: "center",
    valign: "center"
  });
  doc.end();
};

const sendEmailWithAttachment = (transporter, message) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(message, err => {
      if (!err) {
        return resolve();
      }
      reject();
    });
  });
};

const createDirectTransporter = nodemailer => {
  transport = nodemailer.createTransport("direct", {
    debug: true
  });
};

module.exports = {
  createPdfFromImage,
  sendEmailWithAttachment,
  createDirectTransporter
};
