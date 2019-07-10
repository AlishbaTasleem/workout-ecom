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


// @route   GET api/posts/test
// @desc    Test Posts Route
// @access  public
router.get('/test', (req, res) => {
    res.json({
        msg: "Posts work!"
    });
})

module.exports = router;