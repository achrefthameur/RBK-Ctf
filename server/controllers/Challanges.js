const models = require('../models/')

module.exports={
    Get:(req,res)=>{
        models.challanges.GetAll()
          .then((result)=>{
            res.status(200).json(result)
          })
          .catch((err)=>{
              res.status(500).send('Server Error')
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
    },
    delete:(req,res)=>{
        models.challanges.delete(req.params.id)
            .then((result)=>{
                res.status(200).send('Deleted')
            })
            .catch((err)=>{
                res.status(500).send('Server Error')
            })
    }
}