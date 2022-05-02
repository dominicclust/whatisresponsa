const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator')
const { handleValidationErrors } = require('../../utils/validation')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require ('../../db/models');

const router = express.Router();

const validateSignup = [
    check('email')
        .exists({checkFalsy: true})
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({checkFalsy: true})
        .isLength({min: 4, max: 30})
        .withMessage('Please provide a username that is 4 to 30 characters long.'),
    check('username')
        .not().isEmail()
        .withMessage('Username cannot be an email address.'),
    check('password')
        .exists({checkFalsy: true})
        .isLength({min: 6})
        .withMessage('Password must contain 6 or more characters.'),
    handleValidationErrors
];

router.post('/', validateSignup, asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({ user });
}));

module.exports = router;
