const models = require('../models')


module.exports = {
    CreateSession : (req,res,TeamInfo,session)=>{
            models.session.post(TeamInfo.id,session)
                .then((result)=>{
                    res.cookie('RBKCTF', session,{
                        maxAge: 86400 * 1000, 
                        httpOnly: false, 
                        secure: false
                    })
                    res.status(200).send(TeamInfo)
                })
    },
    VerifySession : (req,res,next)=>{
    }
} 