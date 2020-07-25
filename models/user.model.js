const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
let userSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: 'name should not be empty',
  },
  email: {
    type: 'string',
    required: 'email should not be empty',
    unique: true,
  },
  password: {
    type: 'string',
    required: 'password should not be empty',
  },
  role: {
    type: String,
    enum: ['applicant', 'enterprise', 'admin'],
  },
  accessToken: {
    type: String,
  },
});

module.exports = mongoose.model('user', userSchema);
