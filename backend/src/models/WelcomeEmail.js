// Welcoming email model
// For development we will be using mailtrap for testing, but in production we should use some service like mailchimp

const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

// SMTP transporter object
const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS } = process.env;
let transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
});

transporter.use(
  'compile',
  hbs({
    viewEngine: 'handlebars',
    partialsDir: path.resolve(__dirname, '..', 'views', 'mail'),
    viewPath: path.resolve(__dirname, '..', 'views', 'mail'),
    defaultLayout: undefined,
    extName: '.handlebars',
  })
);

module.exports = transporter;
