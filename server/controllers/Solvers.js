const models = require('../models/')

module.exports={
    Create:(req,res)=>{
        models.challanges.SolveCheck(req.body.challange_id)
        .then((result)=>{
            if(result.length > 0 && result[0].Flag == req.body.Flag){
                models.solvers.Create(req.body.user_id,req.body.challange_id)
                .then((_)=>{
                    models.users.updateScore(req.body.user_id,result[0].points)
                    .then((_)=>{
                        res.status(200).send('Correct')
                    })
                    .catch((err)=>{
                        res.status(500).send('Server Error')
                    })
                    
                })
                .catch((err)=>{
                    console.log(err)
                    res.status(500).send('Server Error')
                })
            }else{
                res.status(200).send('Wrong Flag')
            }
        })
        .catch((err)=>{
            res.status(500).send('Server Error')
        })
    },
    Get:(req,res)=>{
        models.solvers.Get(req.params.id)
            .then((result)=>{
                var Solved = result.reduce((challages,row)=>{
                            
                    challages.push(row.Challange_id)
                    return challages
                },[])
                res.status(200).send(Solved)
            })
            .catch((err)=>{
                res.status(500).send('Server Error')
            })
    }
}