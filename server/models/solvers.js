const connection = require('../database')

module.exports = {
    Create:(team_id,challange_id)=>{
        return new Promise((resolve,reject)=>{
            connection.query('INSERT INTO teams_challanges (Team_id,Challange_id) VALUES (?,?)',
            [team_id,challange_id],
            (err,result)=>{
                if(err) return reject(err)
                return resolve(result)
            })
        })
    }
}