const express = require('express')
const asyncHandler = require('express-async-handler')
const {Question, User, Answer} = require('../../db/models')
const {restoreUser} = require('../../utils/auth')
const router = express.Router()

router.post('/answers/:id', restoreUser, asyncHandler(async(req, res) => {
    const {id, body, answerId, userId, createdAt} = req.body;
    const {username} = await User.findByPk(userId)
    const question = await Question.create({id, body, answerId, username, createdAt})
    return res.json(question)
}))
module.exports = router
