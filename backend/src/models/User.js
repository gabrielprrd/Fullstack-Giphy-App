// Mongo schema to store the requirements for creating a new user
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Defines schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    select: false, //so the password is not shown when the user is returned
  },
  gifs: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// Hashes the user's password with bcrypt and saves it

UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

// Creates model
const User = mongoose.model('User', UserSchema);

module.exports = User;
