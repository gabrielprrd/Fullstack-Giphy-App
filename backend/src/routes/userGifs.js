const express = require('express');
const router = express.Router();
const path = require('path');

const User = require(path.join(__dirname, '..', 'models', 'User'));

router.post('/savegif/:id', async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const update = { $push: { gifs: req.body } };

    await User.findOneAndUpdate(filter, update, {
      new: true,
    });

    await res.status(200).send('Gif saved!');
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

module.exports = router;
