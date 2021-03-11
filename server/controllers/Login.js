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
                    var TeamInfo = {
                        id : TeamRow[0].id ,
                        name : TeamRow[0].name,
                        score : TeamRow[0].score,
                        Solved : []
                    }
                    TeamInfo.Solved = TeamRow.reduce((challages,row)=>{
                        challages.push(row.Challange_id)
                        return challages
                    })
                    var session = utils.hashUtil.RandomString(32)
                    middleware.authentification.CreateSession(req,res,TeamInfo,session)
                }else{
                    res.status(200).send('Login fail')
                }
            })
            .catch((err)=>{
                res.status(500).send('Server Error')
            })
    }
}
