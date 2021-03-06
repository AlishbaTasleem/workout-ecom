const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const keys = require('../../config/keys');

// Load user model
const User = require('../../models/User');

// @route   GET api/dashboard/test
// @desc    Test Users Route
// @access  public
router.get('/test', (req, res) => {
    res.json({
        msg: "Users work!"
    });
})

// @route   GET api/dashboard/
// @desc    Show Logged In User
// @access  public

router.get('/', (req, res) => {
    // res.send(req.session.user._id);
    res.render('dashboard/dashboard', {
        dashboard: true,
        isSession: true,
        user: req.session.user,
        withAuth: req.session.user._id || false
    });
})

module.exports = router;