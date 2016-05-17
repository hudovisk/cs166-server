var router          = require('express').Router();
var authController  = require('../auth/auth-controller');

//Authentication API

router.post('/signin',
            authController.signIn);

router.post('/signup',
            authController.signUp);


module.exports = router;
