const connection = require('../database')

module.exports={
    GetAll:()=>{
        return new Promise((resolve,reject)=>{
            connection.query('select * from Challanges',(err,result)=>{
                if(err) return reject(err)
                return resolve(result)
            })
        })
    },
    Create : (challange)=>{
        return new Promise((resolve,reject)=>{
            connection.query('INSERT INTO Challanges (Challange_name,Author,Challange_Link,Hint,Flag,points,Difficulty,type) Values(?,?,?,?,?,?,?,?)',
            [challange.Challange_name,challange.Author,challange.Challange_Link,challange.Hint,challange.Flag,challange.points,challange.Difficulty,challange.type],
            (err,result)=>{
                if(err) return reject(err)
                return resolve(result)
            })
        })
    },
    SolveCheck:(Challange_id)=>{
        return new Promise((resolve,reject)=>{
            connection.query('Select * from Challanges where id=?',
            [Challange_id],
            (err,result)=>{
                if(err) return reject(err)
                return resolve(result) 
            })
        })
    },
    delete:(id)=>{
        return new Promise((resolve,reject)=>{
            connection.query('delete from Challanges where id=?',
            [id],
            (err,result)=>{
                if(err) return reject(err)
                return resolve(result) 
            })
        })
    }
}