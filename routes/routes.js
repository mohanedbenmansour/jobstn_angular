const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const postController = require('../controllers/post.controller');

const multer = require('multer');
//make the destination and image name

const storage = multer.diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.mimetype.split('/')[1]);
  },
});
//accept files with .jpeg or png only
const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
  //fileFilter: fileFilter,
});

router.post('/signup', userController.signup);
router.post('/login', userController.login);

router.get(
  '/getuser/:userId',
  userController.allowIfLoggedin,
  userController.getUser
);

router.get(
  '/getusers',
  //userController.allowIfLoggedin,
  //userController.grantAccess('readAny', 'profile'),
  userController.getUsers
);

router.put(
  '/updateuser/:userId',
  //userController.allowIfLoggedin,
  // userController.grantAccess('updateAny', 'profile'),
  userController.updateUser
);

router.delete(
  '/deleteuser/:userId',
  userController.allowIfLoggedin,
  userController.grantAccess('deleteAny', 'profile'),
  userController.deleteUser
);
//posts routes
router.post('/addpost', upload.single('image'), postController.addPost);
router.get('/getallposts', postController.getAllPosts);
router.get('/getposts/:userId', postController.getPosts);
router.delete('/deletepost/:id', postController.deletePost);
module.exports = router;
