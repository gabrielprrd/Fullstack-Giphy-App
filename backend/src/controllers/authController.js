// All authentication controllers
const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require(path.join(__dirname, '..', 'models', 'User'));

const router = express.Router();

// Generates a JSON Web Token for validation
const generateToken = (params = {}) => {
  return jwt.sign(params, process.env.SECRET, {
    expiresIn: 86400, //seconds
  });
};

let isAuthenticated = false;

router.post('/register', async (req, res) => {
  try {
    // Verify if the user exists by the email because is a 'unique' field
    if (await User.findOne({ email: req.body.email })) {
      return res.sendStatus(400).send('User already exists');
    }

    // Passes the user's info to the body of the request
    // const user = await User.create(req.body);
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    // The password is already hashed and sent to the request, but it shouldn't return even hashed
    user.password = undefined;

    return res.status(200).send({
      user,
      token: generateToken({ id: user.id }),
    });
  } catch (err) {
    return res.status(400).send({ error: 'Registration failed' });
  }
});

router
  .route('/authenticate')
  .post(async (req, res) => {
    const { email, password, name } = req.body;

    // Finds the email and makes an exception for the password because it's a necessary data to authenticate
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(400).send({ error: 'User not found' });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).send({ error: 'Invalid password' });
    }

    user.password = undefined;
    isAuthenticated = true;
    return res.status(200).send(isAuthenticated);
  })
  .get(async (req, res) => {
    await res.send({
      isAuthenticated,
    });
  });

router.post('/logout', async (req, res) => {
  try {
    return res.status(200).send((isAuthenticated = false));
  } catch (err) {
    res.status(400).send('Logout failed');
  }
});

module.exports = (app) => app.use('/auth', router);
