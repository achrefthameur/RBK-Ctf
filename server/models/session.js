const connection = require('../database')

module.exports={
        Get:(session)=>{
                return new Promise((resolve,reject)=>{
                    connection.query('select teams.*,sessions.date from sessions where session=? INNER JOIN teams ON teams.id = sessions.Team_id',
                    [session],
                    (err,result)=>{
                        if(err) return reject(err)
                        return resolve(result)
                    })
                })
        },
        post:(Team_id,session)=>{
            return new Promise((resolve,reject)=>{
                connection.query('INSERT INTO sessions (Team_id,session,date) VALUES(?,?,?)',
                [Team_id,session,Date.now() + 1000 * 3600 * 24 * 7],
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