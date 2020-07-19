const post = require('../models/post.model');
const jwt = require('jsonwebtoken');
const roles = require('../roles');

//setting up the methods
module.exports.addPost = (req, res, next) => {
  console.log(req.file);
  console.log(req.body);
  const url = req.protocol + '://' + req.get('host');
  let newPost = new post({
    title: req.body.title,
    enterprise: req.body.enterprise,
    type: req.body.type,
    address: req.body.address,
    date: req.body.date,
    salary: req.body.salary,
    experience: req.body.experience,
    description: req.body.description,
    email: req.body.email,
    tags: req.body.tags,

    image: url + '/uploads/' + req.file.filename,
  });
  newPost.save((err, post) => {
    if (err) res.status(500).json({ errmsg: err });
    res.status(200).json({ msg: post });
  });
};
module.exports.getPosts = (req, res, next) => {
  let query = { userId: req.params.userId };
  post.find(query, (err, posts) => {
    if (err) res.status(500).json({ ermsg: err });
    res.status(200).json({ msg: posts });
  });
};
module.exports.getAllPosts = (req, res, next) => {
  post.find({}, (err, posts) => {
    if (err) res.status(500).json({ ermsg: err });
    res.status(200).json({ msg: posts });
  });
};
module.exports.deletePost = (req, res, next) => {
  post.findOneAndRemove({ _id: req.params.id }, (err, post) => {
    if (err) res.status(500).json({ ermsg: err });
    res.status(500).json({ post: post });
  });
};
