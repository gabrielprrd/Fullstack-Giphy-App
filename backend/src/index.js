const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('./database/db');
const fetch = require('node-fetch');
const cors = require('cors');
const router = express.Router();

// Enviroment variables that can't be shown on git
const result = require('dotenv').config();
if (result.error) {
  throw result.error;
}

// Initialize express
const app = express();

// Mongoose
const db = mongoose.connection;

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setting headers to enable CORS
app.use(cors());

// Template engine - Handlebars
app.engine(
  'handlebars',
  handlebars({
    extname: 'handlebars',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
  })
);
app.set('view engine', 'handlebars');

// Controllers
require(path.join(__dirname, 'controllers', 'index'))(app);

// Routes
let gifsObject = undefined;
app
  .route('/results')
  .post(async (req, res) => {
    const apiKey = process.env.API_KEY;
    const { query } = req.body;
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25&offset=0&rating=G&lang=en`;

    let result = await fetch(endpoint);
    let response = await result.json();
    gifsObject = response;
  })
  .get(async (req, res) => {
    await res.send(gifsObject);
  });

// Running server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
