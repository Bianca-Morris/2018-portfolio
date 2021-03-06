const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_KEY);

const app = express();
const PORT = process.env.PORT || 3000;
// const api = require('./backend/routes');

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
      // console.log('resp:', resp);
      // console.log('type of resp: ', typeof resp);
      // console.log(resp[0]);
      // console.log('resp keys', Object.keys(resp[0]));
      if (resp[0]) {
        console.log('Successful!');
        console.log(`${resp[0].statusMessage}! Status Code: ${resp[0].statusCode}`);
        res.sendFile(path.join(__dirname, '/public/success.html'));
      } else {
        next(new Error('No response received from mail server...'));
      }
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
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
