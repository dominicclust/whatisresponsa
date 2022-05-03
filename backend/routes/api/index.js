const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/answers', answersRouter);


// Middleware Testing!

// router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'iEmmaDemo'
//         }
//     });
//     setTokenCookie(res, user)
//     return res.json({ user })
// }));

// router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => {
//         return res.json(req.user);
//     }
// )

// no longer needed! CSRF is up and running!
// router.post('/test', (req, res) => {
//     res.json({ requestBody: req.body });
// });

module.exports = router;
