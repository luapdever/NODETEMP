require("dotenv").config();
const nodemailer = require("nodemailer");

exports.sendMailTo = (to, subject, message, attachments = []) => {
  const transportConfig = {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  };

  const mailData = {
    from: process.env.MAIL_FROM_MAIL,
    to,
    subject,
    html: message,
    attachments,
  };

  let transporter = nodemailer.createTransport(transportConfig);

  return transporter.sendMail(mailData, (err, info) => {
    if (err) return console.log(err);
    else return { success: true, data: info };
  });
};
