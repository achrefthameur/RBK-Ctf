const models = require('../models')


module.exports = {
    CreateSession : (req,res,team_id,session)=>{
            models.session.post(team_id,session)
                .then((result)=>{
                    res.cookie('RBKCTF', session,{
                        maxAge: 86400 * 1000, 
                        httpOnly: false, 
                        secure: false
                    })
                    res.status(200).send('success')
                })
                .catch((err)=>{
                    console.log(err)
                    res.status(500).send('Server Error')
                })
    },
    VerifySession : (req,res,next)=>{
        if(req.cookies.RBKCTF){
            models.session.Get(req.cookies.RBKCTF)
                .then((result)=>{
                    if(result.length >0 && (result[0].date > Date.now())){
                        console.log(result)
                        var TeamInfo = {
                            Team_id : result[0].Team_id ,
                            name : result[0].name,
                            score : result[0].score,
                            Solved : []
                        }
                        TeamInfo.Solved = result.reduce((challages,row)=>{
                            
                            challages.push(row.Challange_id)
                            return challages
                        },[])
                        res.status(200).send(TeamInfo)
                    }else{
                        res.status(200).send('Session Login Fail')
                    }
                })
                .catch((err)=>{
                    console.log(err)
                    res.status(500).send('Server Error') 
                })
        }else{
            res.status(200).send('Session Login Fail')
        }
       
    },
    VerifyAdminSession : (req,res,next)=>{
        if(req.cookies.RBKCTF){
            models.session.Get(req.cookies.RBKCTF)
                .then((result)=>{
                    if(result.length >0 && (result[0].date > Date.now()) && result[0].id == 0){
                        res.render('Dashboard')
                    }else{
                        res.render('adminLogin')
                    }
                })
                .catch((err)=>{
                    res.status(500).send('Server Error') 
                })
        }else{
            res.render('adminLogin')
        }
       
    }
} 