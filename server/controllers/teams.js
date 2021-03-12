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
            models.teams.Create(req.body.team,lib.hashUtil.RandomString(32))
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
                    console.log(err)
                    res.status(500).send('Server Error')
                })
        }
}