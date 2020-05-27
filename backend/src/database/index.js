// Mongoose config
const mongoose = require('mongoose');
const dbPath = 'mongodb://localhost/giphyapp';

mongoose
  .connect(dbPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true, // to stop a deprecation warning
  })
  .then(() => console.log('Mongoose connected'))
  .catch((error) => console.log(`MongoDB connection errors: ${error}`));

module.exports = mongoose;
