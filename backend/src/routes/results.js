const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

let gifsObject = undefined;
router
  .route('/results')
  .post(async (req, res) => {
    try {
      const apiKey = process.env.API_KEY;
      const { select, fetchedIncrementer, query } = req.body;

      // Se o fetchedIncrement começar em 1, a lógica fica ainda mais simples (sem o if)
      // Agora crio um state no front que incrementa baseado no número de clicks

      let limit = 25*fetchedIncrementer;

      const endpoint = `https://api.giphy.com/v1/${select}/search?api_key=${apiKey}&q=${query}&limit=${limit}&offset=0&rating=G&lang=en`;

      let result = await fetch(endpoint);
      let response = await result.json();
      gifsObject = response;

      return res.send(gifsObject);
    } catch (err) {
      throw new Error(err);
    }
  })
  .get(async (req, res) => {
    await res.send(gifsObject);
  });

module.exports = router;
