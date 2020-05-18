const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('./database');
const cors = require('cors');

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

// Routes
app.use(require(path.join(__dirname, 'routes', 'index')));

// Controllers
require(path.join(__dirname, 'controllers', 'index'))(app);

// Running server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
