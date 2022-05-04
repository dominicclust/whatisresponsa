const express = require('express')
const asyncHandler = require('express-async-handler');
const { Answer, User } = require('../../db/models')
const { restoreUser } = require('../../utils/auth')

const router = express.Router()

router.get('/', restoreUser, asyncHandler(async(req, res) => {
    const answers = await Answer.findAll({include: User});
    return res.json({answers})
}))

router.post('/', restoreUser, asyncHandler(async(req, res) => {
    const {id, body, userId, createdAt} = req.body
    const user = await User.findByPk(userId)
    const username = user.username;
    const answer = await Answer.create({id, body, username, createdAt})
    return res.json({answer})
}))
module.exports = router;
