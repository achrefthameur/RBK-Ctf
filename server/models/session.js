const connection = require('../database')

module.exports={
        Get:(session)=>{
                return new Promise((resolve,reject)=>{
                    connection.query('select * from sessions   where session=? ',
                    [session],
                    (err,result)=>{
                        if(err) return reject(err)
                        return resolve(result)
                    })
                })
        },
        post:(user_id,session)=>{
            return new Promise((resolve,reject)=>{
                connection.query('INSERT INTO sessions (user_id,session,date) VALUES(?,?,?)',
                [user_id,session,Date.now() + 1000 * 3600 * 24 * 7],
                (err,result)=>{
                    if(err) return reject(err)
                    return resolve(result)
                })
            })
        },
        delete:(session)=>{
            return new Promise((resolve,reject)=>{
                connection.query('DELETE from sessions where session = ?',
                [session],
                (err,result)=>{
                    if(err) return reject(err)
                    return resolve(result)
                })
            })
        }
}