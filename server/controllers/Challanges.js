const models = require('../models/')

module.exports={
    Get:(req,res)=>{
        models.challanges.GetAll()
          .then((result)=>{
            res.status(200).json(result)
          })
          .catch((err)=>{
              res.status(500).send()
          })
        
    },
    Post:(req,res)=>{
        models.challanges.Post(req.body.challange)
           .then(()=>{
               res.status(200).send('Challange Added')
           })
           .catch((err)=>{
               res.status(500).send()
           })
    }
}