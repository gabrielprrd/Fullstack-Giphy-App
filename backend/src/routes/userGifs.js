const express = require('express');
const router = express.Router();
const path = require('path');

const User = require(path.join(__dirname, '..', 'models', 'User'));

router
  .route('/savegif/:id')
  .post(async (req, res) => {
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
  })
  .get((req, res) => {
    res.send('get route');
  });

// IMPORTANT: check if the component updates even though the useEffect is only on the contextProvider

module.exports = router;
