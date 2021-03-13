const connection = require('../database')

module.exports = {
    Create:(user_id,challange_id)=>{
        return new Promise((resolve,reject)=>{
            connection.query('INSERT INTO users_challanges (user_id,Challange_id) VALUES (?,?)',
            [user_id,challange_id],
            (err,result)=>{
                if(err) return reject(err)
                return resolve(result)
            })
        })
    },
    Get:(user_id)=>{
        return new Promise((resolve,reject)=>{
            connection.query('select * from users_challanges where user_id = ?',
            [user_id],
            (err,result)=>{
                if(err) return reject(err)
                return resolve(result)
            })
        })
    }
}