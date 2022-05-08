const express = require('express')
const asyncHandler = require('express-async-handler');
const { Answer, User, Question } = require('../../db/models')
const { restoreUser } = require('../../utils/auth')

const router = express.Router()


// /backend/routes/api/answers.js

router.get('/', restoreUser, asyncHandler(async(req, res) => {
    const answers = await Answer.findAll({include: [User, Question]});
    return res.json(answers)
}))

router.post('/', restoreUser, asyncHandler(async(req, res) => {
    const {id, body, userId, createdAt} = req.body
    const answer = await Answer.create({id, body, userId, createdAt})
    return res.json(answer)
}))

router.get('/:id', restoreUser, asyncHandler(async(req, res) => {
    const {id} = req.params.url
    const answer = await Answer.findByPk( {include: [User, Question]})
    return res.json(answer)
}))

router.put('/:id', restoreUser, asyncHandler(async(req, res) => {
    const {newBody} = req.body
    const answer = await Answer.findByPk(req.params.id, {include: User})
    const newAnswer = await answer.update({body: JSON.stringify(newBody)})
    return await res.json(newAnswer)

}))
router.delete('/:id', restoreUser, asyncHandler(async(req, res) => {
    const answer = await Answer.findByPk(req.params.id)
    await answer.destroy();
    return answer.id
}))


router.post('/:id', restoreUser, asyncHandler(async(req, res) => {
    const {id, body, answerId, userId, createdAt} = req.body;
    const {username} = await User.findByPk(userId)
    const question = await Question.create({id, body, answerId, username, createdAt})
    return res.json(question)
}))

module.exports = router;
