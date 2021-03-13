const controller = require('./controllers');
const middleware = require('./middleware');
const router  = require('express').Router();


router.post('/api/login',controller.Login.login);
router.post('/api/register',controller.users.CreateUser);
router.get('/api/logout',controller.Login.logout)


router.get('/api/scoardBoard',controller.users.GetTop);


router.get('/api/challanges',controller.challanges.Get);
router.post('/api/challanges',controller.challanges.Post);
router.get('/api/solve/:id',controller.solvers.Get)
router.post('/api/solve',controller.solvers.Create)


router.get('/api/session',middleware.authentification.VerifySession)
router.get('/admin',middleware.authentification.VerifyAdminSession)

module.exports = router