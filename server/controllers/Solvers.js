const models = require('../models/')

module.exports={
    Create:(req,res)=>{
        models.challanges.SolveCheck(req.body.challange_id)
        .then((result)=>{
            if(result.length > 0 && result[0].Flag == req.body.Flag){
                models.solvers.Create(req.body.team_id,req.body.challange_id)
                .then((_)=>{
                    res.status(200).send('Correct')
                })
                .catch((err)=>{
                    res.status(500).send('Server Error')
                })
            }else{
                res.status(200).send('Wrong Flag')
            }
        })
        .catch((err)=>{
            res.status(500).send('Server Error')
        })
    }
}