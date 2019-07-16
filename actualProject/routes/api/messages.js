const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

const keys = require('../../config/keys');

// Load user model
const User = require('../../models/User');

// @route   GET api/messages/test
// @desc    Test Users Route
// @access  public
router.get('/test', (req, res) => {
    res.json({
        msg: "Messages work!"
    });
})

// @route   GET api/messages/
// @desc    Show Messages
// @access  public

router.get('/', (req, res) => {
    // res.send(req.session.user._id);
    res.render('messages/messages', {
        messages: true,
        isSession: true,
        user: req.session.user,
        withAuth: req.session.user._id || false
    });
})

module.exports = router;