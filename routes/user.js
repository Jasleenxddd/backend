// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');


router.route('/').get(userController.getUsers);  // GET all users
router.route('/').post(userController.createUser);  // POST a new user
router.route('/:id').put(userController.updateUser);  // PUT (update) a user by ID

module.exports = router;
