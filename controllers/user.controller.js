const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const roles = require('../roles');
const bcrypt = require('bcrypt');
//sign in /sign up
async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

async function validatePassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}
//access controle
module.exports.grantAccess = function (action, resource) {
  return async (req, res, next) => {
    const permission = roles.can(req.user.role)[action](resource);
    if (!permission.granted) {
      return res.status(401).json({
        error: "You don't have enough permission to perform this action",
      });
    }
    next();
  };
};

module.exports.allowIfLoggedin = async (req, res, next) => {
  const user = res.locals.loggedInUser;
  if (!user)
    return res.status(401).json({
      error: 'You need to be logged in to access this route',
    });
  req.user = user;
  next();
};

module.exports.signup = async (req, res, next) => {
  try {
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: await hashPassword(req.body.password),
      role: req.body.role || 'applicant',
    });
    const accessToken = jwt.sign({ userId: newUser._id }, 'secret', {
      expiresIn: '1d',
    });
    newUser.accessToken = accessToken;
    console.log(newUser);
    newUser.save((err, user) => {
      if (err) res.status(500).json({ errmsg: err });
      res.status(200).json({ data: user, accessToken });
    });
  } catch (error) {
    next(error);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return next(new Error('Email does not exist'));
    const validPassword = await validatePassword(password, user.password);
    if (!validPassword) return next(new Error('Password is not correct'));
    const accessToken = jwt.sign({ userId: user._id }, 'secret', {
      expiresIn: '1d',
    });
    await User.findByIdAndUpdate(user._id, { accessToken });
    res.status(200).json({
      data: { email: user.email, role: user.role, userId: user._id },
      accessToken,
    });
  } catch (error) {
    next(error);
  }
};
//crud
module.exports.getUsers = (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) res.status(500).json({ ermsg: err });
    res.status(200).json({ msg: users });
  });
};
module.exports.getUser = async (req, res, next) => {
  const userId = req.params.userId;
  const user = User.findById(userId);
  if (!user) return next(new Error('User does not exist'));
  res.status(200).json({
    data: user,
  });
};

module.exports.updateUser = (req, res, next) => {
  console.log(req.body.name);

  User.findByIdAndUpdate(
    req.params.userId,
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },

    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(
          'Error in user Update :' + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
};

module.exports.deleteUser = async (req, res, next) => {
  const userId = req.params.userId;
  User.findByIdAndDelete(userId);
  res.status(200).json({
    data: null,
    message: 'User has been deleted',
  });
};
//
