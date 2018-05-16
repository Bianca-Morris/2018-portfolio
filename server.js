const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const smtpTransport = require('nodemailer-smtp-transport');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_KEY);

const app = express();
const PORT = process.env.PORT || 3000;
// const api = require('./backend/routes');

// Set up email handling
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   host: 'smtp.gmail.com',
//   auth: {
//     user: process.env.TO_EMAIL,
//     pass: process.env.TO_PASS,
//   }
// });

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/app', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/app.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/error', (req, res, next) => {
  next(new Error('Test error'));
});

app.get('/check', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/public/success.html'));
});

// Submits the form to my email
app.post('/submitMail', (req, res, next) => {
  const mailOptions = {
    from: req.body.sender,
    to: process.env.TO_EMAIL,
    subject: `Re: Bianca-Morris.com | ${req.body.subject}`,
    text: req.body.message,
    html: `
      <h2>New message from bianca-morris.com</h2>
      <h4>${req.body.fname} ${req.body.lname} says:</h4>
      <p>
        ${req.body.message.split('\n').join('<p/><p>')}
      <p/>
      <p>
      Reply to: ${req.body.sender}
      </p>
    `
  };
  sgMail.send(mailOptions)
    .then((resp) => {
      console.log('Successful!');
      console.log(`${resp.statusMessage}! Status Code: ${resp.statusCode}`);
      res.sendFile(path.join(__dirname, '/public/success.html'));
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.log(error);
  //     next(error);
  //   } else {
  //     console.log(`Email sent: ${info.response}`);
  //   }
  // });
});

// app.use('/api', api);

app.use((err, req, res, next) => {
  console.log(err);
  res.sendFile(path.join(__dirname, '/public/error.html'));
});

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
  }
});
