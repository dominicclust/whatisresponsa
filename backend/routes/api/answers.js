const express = require('express')
const asyncHandler = require('express-async-handler');
const { Answer, User } = require('../../db/models')
const { restoreUser } = require('../../utils/auth')
const router = express.Router()

router.get('/', restoreUser, asyncHandler(async(req, res) => {
    const answers = await Answer.findAll({include: User, order: [['createdAt', 'DESC']]});
    return answers
}))
