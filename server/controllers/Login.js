const models = require('../models')
const utils = require('../lib')
const middleware = require('../middleware');

module.exports = {
    login:(req,res)=>{
        var username = req.body.user.username
        var password = req.body.user.password
        models.users.GetOne('',username)
            .then((UserRow)=>{
                if(UserRow.length > 0  && utils.hashUtil.HashComparer(password,UserRow[0].password,UserRow[0].salt)){
                    var session = utils.hashUtil.RandomString(32)
                    middleware.authentification.CreateSession(req,res,UserRow[0].id,session)
                }else{
                    res.status(200).send('Login fail')
                }
            })
            .catch((err)=>{
                res.status(500).send('Server Error')
            })
    },
    logout : (req,res)=>{
        models.session.delete(req.cookies.RBKCTF)
            .then((result)=>{
                res.clearCookie('RBKCTF');
                res.redirect('/');
            })
            .catch((err)=>{
                res.status(500).send('Server Error')
            })
    }
}
