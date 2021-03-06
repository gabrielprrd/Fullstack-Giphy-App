const express = require('express');
const router = express.Router();
const path = require('path');

const User = require(path.join(__dirname, '..', 'models', 'User'));

router.post('/deletegif/:id', async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const update = { $pull: { gifs: { $in: [req.body] } } };

    await User.findOneAndUpdate(filter, update, {
      new: true,
    });

    const user = await User.findOne(filter);

    await res.status(200).send(user);
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

module.exports = router;
