const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

router
	.route('/users')
	.get(userController.getAllUsers)
	.post(userController.createUser);

router
	.route('/users/:id')
	.get(userController.getUserById)
	.put(userController.updateUser)
	.delete(userController.deleteUser);

module.exports = router;
