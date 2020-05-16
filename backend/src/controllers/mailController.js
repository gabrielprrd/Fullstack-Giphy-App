// Sends the email to the user

const express = require('express');
const path = require('path');
const router = express.Router();

const Transporter = require(path.resolve(
  __dirname,
  '..',
  'models',
  'WelcomeEmail'
));
const User = require(path.resolve(__dirname, '..', 'models', 'User'));

router.post('/welcome_email', async (req, res) => {
  const { email, name } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(400).send({ error: 'User not found' });
    }

    Transporter.sendMail({
      from: process.env.DEV_EMAIL,
      to: email,
      subject: 'Welcome to Giphy App',
      template: 'welcome',
      context: { name },
    }),
      (err) => {
        if (err) {
          return res.status(400).send({ error: 'Cannot send email' });
        }
      };
  } catch (err) {
    res.status(400).send({ error: 'Error on sending email' });
    console.log(err);
  }
});

module.exports = (app) => app.use(router);
