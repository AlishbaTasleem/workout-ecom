const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const keys = require('../../config/keys');

// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');


// Load user model
const User = require('../../models/User');

// @route   GET api/users/test
// @desc    Test Users Route
// @access  public
router.get('/test', (req, res) => {
    res.json({
        msg: "Users work!"
    });
})

// @route   GET api/users/register
// @desc    Register User
// @access  public

router.get('/register', (req, res) => {
    res.render('auth/register', {withoutAuth: true});
})

// @route   POST api/users/register
// @desc    Register User
// @access  public

router.post('/register', (req, res) => {

    // Pull the errors from validation
    const {
        errors,
        isValid
    } = validateRegisterInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400, JSON(errors));
    }

    User.findOne({
            email: req.body.email
        })
        .then(user => {
            if (user) {
                errors.email = "Email already exists!";
                return res.status(400).json(errors);
            } else {
                avatar = gravatar.url(req.body.email, {
                    s: '200', //size
                    r: 'pg', //rating
                    d: 'mm' // default
                });

                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    avatar: avatar,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(`Error in GenSalt: ${err}`))
                    })
                });

                res.render('login', {withoutAuth: true});
            }
        })
});

// @route   GET api/users/login
// @desc    Login User - Return JWT token
// @access  public


router.get('/login', (req, res) => {
    res.render('auth/login', {withoutAuth: true});
})

router.post('/login', (req, res) => {

    const { errors, isValid } = validateLoginInput(req.body);

    const email = req.body.email;
    const password = req.body.password;
    // find user by email.
    User.findOne({
            email
        })
        .then(user => {
            if (!user) {
                errors.email = 'User not found!';
                return res.status(404).JSON(errors);
            }

            // Check for password once email is matched
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        // Generate token now
                        // User matches

                        // Create JWT payload
                        const payload = {
                            id: user.id,
                            name: user.name,
                            avatar: user.avatar
                        };

                        jwt.sign(payload, keys.secretOrKey, {
                            expiresIn: 3600
                        }, (err, token) => {
                            res.JSON({
                                success: true,
                                token: 'Bearer ' + token
                            })
                            });
                            
                        res.render('dashboard/dashboard', { withAuth: true, user: user});

                    } else {
                        errors.password = 'Password incorrect!';
                        return res.status(400).JSON(errors);
                    }
                })

        });

});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get('/current', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
})

module.exports = router;