const express = require('express');
const router = express.Router();
const loginController = require('../../controllers/users/login'),
      signupController = require('../../controllers/users/signup'),
      registercontroller = require('../../controllers/users/register');

router.get('/login',loginController.getLoginPage);

router.post('/login',loginController.loginPost);

router.get('/register',registercontroller.getRegisterPage);

router.post('/register',registercontroller.registerPost);

router.get('/signup',signupController.getSignupPage);

router.post('/signup',signupController.signupPost);

router.post('/logout',loginController.logout);

module.exports = router;