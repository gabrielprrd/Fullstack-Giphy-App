const express = require('express');
const router = express.Router();
const path = require('path');
// ------------------- Solution 2: Much better! -----------------------
// The User Schema has an empty array called Gifs [done]
// When saving the gifs, just pushes to the array using a post request
// Como a request sabe quem é o usuário? Posso usar o _id no parâmetro ou ver se tá no escopo
const User = require(path.join(__dirname, '..', 'models', 'User'));
let user = {};

router.route('/savegif/:id').post(async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const update = { $push: { gifs: JSON.stringify(req.body) } };

    await User.findOneAndUpdate(filter, update, {
      new: true,
    });

    console.log('Gif saved!')
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
