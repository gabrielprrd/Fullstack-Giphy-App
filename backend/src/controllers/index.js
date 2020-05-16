// Dynamic way of importing all controllers to the main controller file
const fs = require('fs');
const path = require('path');

module.exports = (app) => {
  fs.readdirSync(__dirname)
    // filters files that are not this one or special ones like .env or .gitnore etc.
    .filter((file) => file.indexOf('.') !== 0 && file !== 'index.js')
    // requires those files and passes the app
    .forEach((file) => require(path.resolve(__dirname, file))(app));
};
