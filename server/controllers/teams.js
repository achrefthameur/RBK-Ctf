const models = require('../models')
const lib = require('../lib')

module.exports = {
        GetTeam:(req,res)=>{
            models.teams.GetOne(req.body.name)
                .then((result)=>{
                    res.status(200).send(result)
                })
                .catch((err)=>{
                    res.status(500).send('Server Error')
                })
        },
        CreateTeam:(req,res)=>{
            var salt = lib.hashUtil.RandomString(32);
            console.log(lib.hashUtil)
            req.body.team.password = lib.hashUtil.createHash(req.body.team.password,salt)
            models.teams.Create(req.body.team,salt)
                .then((_)=>{
                    res.status(200).send('Team Created')
                })
                .catch((err)=>{
                    res.status(500).send('Server Error')
                })
        },
        GetTop:(req,res)=>{
            models.teams.GetTop()
                .then((result)=>{
                    res.status(200).json(result)
                })
                .catch((err)=>{
                    res.status(500).send('Server Error')
                })
        }
}