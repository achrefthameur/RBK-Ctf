const models = require('../models')
const utils = require('../lib')
const middleware = require('../middleware');

module.exports = {
    login:(req,res)=>{
        var teamName = req.body.name
        var password = req.body.password
        models.teams.GetOne(teamName)
            .then((TeamRow)=>{
                if(TeamRow.length > 0 && TeamRow[0].password == password && utils.hashUtil.HashComparer(password,TeamRow[0].password,TeamRow[0].salt)){
                    var session = utils.hashUtil.RandomString(32)
                    middleware.authentification.CreateSession(req,res,TeamRow[0].id,session)
                }else{
                    res.status(200).send('Login fail')
                }
            })
            .catch((err)=>{
                res.status(500).send('Server Error')
            })
    }
}
