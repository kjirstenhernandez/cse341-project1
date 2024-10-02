const express = require('express');
const router = express.Router();
const userValidate = require('../utilities/user-validation');

const usersController = require('../controllers/users');  

// Pull contact (single or all)
router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);

// Create new contact
router.post('/', userValidate.createUserRules(), userValidate.checkUserData, usersController.createUser);

//Update contact
router.put('/:id', usersController.updateUser);

// Delete contact
router.delete('/:id', usersController.deleteUser);

module.exports= router;