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

router.get('/test', (req, res) => {
    res.json({
        msg: "Users work!"
    });
})

router.get('/register', (req, res) => {
    res.render('auth/register', {
        withoutAuth: true
    });
})

router.post('/register', (req, res) => {

    // Pull the errors from validation
    const {
        errors,
        isValid
    } = validateRegisterInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400, errors);
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
                            .then(user => {
                                // res.json(user)
                                res.render('auth/login', {
                                    withoutAuth: true
                                });
                            })
                            .catch(err => console.log(`Error in GenSalt: ${err}`))
                    })
                });


            }
        })
});

router.get('/login', (req, res) => {
    res.render('auth/login', {
        withoutAuth: true
    });
})

router.post('/login', (req, res) => {
    const {
        errors,
        isValid
    } = validateLoginInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({
        email
    }).then(user => {
        // Check for user
        if (!user) {
            errors.email = 'User not found';
            return res.status(404).json(errors);
        }

        // Check Password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                res.render('/dashboard/dashboard');
                // res.render('dashboard/dashboard', {withAuth: true, user: user})
            } else {
                errors.password = 'Password incorrect';
                return res.status(400).json(errors);
            }
        });
    });
});



// res.render('dashboard/dashboard', { withAuth: true, user: user});



router.get('/current', (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});


module.exports = router;