const mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
  title: {
    type: String,

    required: ['title should not be empty'],
  },
  enterprise: {
    type: String,
    required: ['enterprise should not be empty'],
  },
  type: {
    type: String,
    required: ['type should not be empty'],
  },
  address: {
    type: String,
    required: ['adresse should not be empty'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
    require: ['image is required'],
  },
  salary: {
    type: Number,
    require: ['salary should not be empty'],
  },
  experience: {
    type: String,
    required: ['experience should not be empty'],
  },
  description: {
    type: String,
    required: ['description should not be empty'],
  },
  email: {
    type: String,
    required: ['email should not be empty'],
  },
  tags: {
    type: String,
    required: ['tags should not be empty'],
  },
});
module.exports = mongoose.model('post', postSchema);
