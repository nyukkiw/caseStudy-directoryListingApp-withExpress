const express = require('express');
const AuthController = require('../controllers/auth');
const router = express.Router();
const User = require('../models/user');
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');


router.route('/register')
    .get(AuthController.registerForm )
    .post(wrapAsync(AuthController.register))


router.route('/login')
    .get(AuthController.loginForm)
    .post(passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: {
        type: 'error_msg',
        msg: 'Invalid Username or Password'
    }

}), AuthController.login);

router.post('/logout', AuthController.logout);

module.exports = router