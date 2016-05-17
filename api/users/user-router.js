var router          = require('express').Router();
var userController  = require('./user-controller');
var authController  = require('../auth/auth-controller');

//Users API - passport and session dependecy

router.get('/me',
            authController.requireToken,
            userController.getMe);

module.exports = router;
