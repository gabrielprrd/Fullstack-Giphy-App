// Dynamic routing
// Adds all files from this 'routes' folder
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

fs.readdirSync(__dirname)
  // filters files that are not this one or special ones like .env or .gitnore etc.
  .filter((file) => file.indexOf('.') !== 0 && file !== 'index.js')
  // requires those files and passes the app
  .forEach((file) => router.use('/', require(path.resolve(__dirname, file))));

module.exports = router;
