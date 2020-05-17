const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

let gifsObject = undefined;
router
  .route('/results')
  .post(async (req, res) => {
    try {
      const apiKey = process.env.API_KEY;
      const { query } = req.body;
      const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25&offset=0&rating=G&lang=en`;

      let result = await fetch(endpoint);
      let response = await result.json();
      gifsObject = response;
    } catch (err) {
      throw new Error(err);
    }

  })
  .get(async (req, res) => {
    await res.send(gifsObject);
  });

module.exports = router;
