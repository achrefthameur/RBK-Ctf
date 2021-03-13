const models = require('../models')
const lib = require('../lib')

module.exports = {
        GetUser:(req,res)=>{
            models.users.GetOne(req.params.id,'')
                .then((result)=>{
                    var NeededInfo = {
                        id:result[0].id,
                        name : result[0].name,
                        Lastname : result[0].Lastname,
                        email : result[0].email,
                        score : result[0].score
                    }
                    res.status(200).send(NeededInfo)
                })
                .catch((err)=>{
                    res.status(500).send('Server Error')
                })
        },
        CreateUser:(req,res)=>{
            models.users.GetOne('',req.body.user.username)
                .then((result)=>{
                    if(result.length == 0 && req.body.user.username != ''){
                        var salt = lib.hashUtil.RandomString(32);
                        req.body.user.password = lib.hashUtil.createHash(req.body.user.password,salt)
                        models.users.Create(req.body.user,salt)
                            .then((_)=>{
                                res.status(200).send('user Created')
                            })
                            .catch((err)=>{
                                res.status(500).send('Server Error')
                            })
                    }else{
                        res.status(200).send('username Already Exist')
                    }
                })
                .catch((err)=>{
                    console.log(err)
                    res.status(500).send('Server Error')
                })

        },
        GetTop:(req,res)=>{
            models.users.GetTop()
                .then((result)=>{
                    var filter = result.reduce((TopUsers,row)=>{
                        var UserInfoNeeded = {
                                id:row.id,
                                username:row.username,
                                score:row.score
                            }
                        TopUsers.push(UserInfoNeeded)
                        return TopUsers
                    },[])
                    res.status(200).json(filter)
                })
                .catch((err)=>{
                    res.status(500).send('Server Error')
                })
        },
        UpdateUser:(req,res)=>{
            models.users.Update(req.params.id,req.body.user)
                .then((result)=>{
                    console.log(req.params.id)
                    res.status(200).send('user Updated')
                })
                .catch((err)=>{
                    res.status(500).send('Server Error')
                })
        }
}