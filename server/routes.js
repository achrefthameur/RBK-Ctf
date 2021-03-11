const controller = require('./controllers');
const middleware = require('./middleware');
const router  = require('express').Router();


router.post('/api/login',controller.Login.login);
router.post('/api/register',controller.teams.CreateTeam);

router.get('/api/session',middleware.authentification.VerifySession)

router.get('/api/scoardBoard',controller.teams.GetTop);


router.get('/api/challanges',controller.challanges.Get);
router.post('/api/challanges',controller.challanges.Post);
router.post('/api/solve',controller.solvers.Create)


router.get('/admin',(req,res)=>{
    
})

module.exports = router