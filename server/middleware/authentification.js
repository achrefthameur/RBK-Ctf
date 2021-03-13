const models = require('../models')


module.exports = {
    CreateSession : (req,res,user_id,session)=>{
            models.session.post(user_id,session)
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
                        var UserInfo = {
                            user_id : result[0].user_id ,
                            username : result[0].username,
                            score : result[0].score,
                        }
                        res.status(200).send(UserInfo)
                    }else{
                        res.status(200).send('Session Login Fail')
                    }
                })
                .catch((err)=>{
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