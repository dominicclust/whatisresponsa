const express = require('express')
const asyncHandler = require('express-async-handler');
const { Answer, User, Question } = require('../../db/models')
const { restoreUser } = require('../../utils/auth')

const router = express.Router()


// /backend/routes/api/answers.js

router.get('/', restoreUser, asyncHandler(async(req, res) => {
    const answers = await Answer.findAll({include: User});
    return res.json(answers)
}))

router.post('/', restoreUser, asyncHandler(async(req, res) => {
    const {id, body, userId, createdAt} = req.body
    const answer = await Answer.create({id, body, userId, createdAt})
    return res.json(answer)
}))

router.put('/:id', restoreUser, asyncHandler(async(req, res) => {
    const {id, body} = req.body;
    const answer = await Answer.findByPk(id, {include: User})
    answer.body = body;
    return res.json(answer)

}))
router.delete('/:id', restoreUser, asyncHandler(async(req, res) => {
    const {id} = req
    const answer = await Answer.findByPk(id)
    await answer.destroy();
}))

router.get('/:id', restoreUser, asyncHandler(async(req, res) => {
    const {id} = req.params.id
    const answer = await Answer.findByPk(id, {include: [User, Question]})

    return res.json(answer)
}))

router.post('/:id', restoreUser, asyncHandler(async(req, res) => {
    const {id, body, answerId, userId, createdAt} = req.body;
    const {username} = await User.findByPk(userId)
    const question = await Question.create({id, body, answerId, username, createdAt})
    return res.json(question)
}))

module.exports = router;
