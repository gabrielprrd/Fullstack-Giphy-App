// All gifs controllers
const express = require('express');
const path = require('path');

const User = require(path.join(__dirname, '..', 'models', 'User'));

const router = express.Router();

router.post('/updatesavedgifs', async (req, res) => {
  let { email } = req.body;
  try {
    let updatedUser = await User.findOne({ email });
    return await res.status(200).send({
      user: updatedUser,
    });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

module.exports = (app) => app.use('/auth', router);
