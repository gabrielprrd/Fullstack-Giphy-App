const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.post('/results', async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;
    const { select, fetchedIncrementer, query } = req.body;
    let limit = 25 * fetchedIncrementer;

    const endpoint = `https://api.giphy.com/v1/${select}/search?api_key=${apiKey}&q=${query}&limit=${limit}&offset=0&rating=G&lang=en`;

    let result = await fetch(endpoint);
    let response = await result.json();
    return res.send(response);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;
