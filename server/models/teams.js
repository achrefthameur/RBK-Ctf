var connection = require('../database')

module.exports={
    GetOne:(name)=>{
        return new Promise((resolve,reject)=>{
            connection.query('select * from teams where name = ? INNER JOIN teams_challanges ON teams_challanges.Team_id = teams.id ',
            [name],
            (err,result)=>{
                if(err) return reject(err)
                return resolve(result)
            })
        })
    },
    Create:(team,salt)=>{
        return new Promise((resolve,reject)=>{
            connection.query('INSERT into teams (name,password,score,salt) VALUES (?,?,0,?)',
            [team.name,team.password,salt],
            (err,result)=>{
                if(err) return reject(err)
                return resolve(result)
            })
        })
    },
    GetTop:()=>{
        return new Promise((resolve,reject)=>{
            connection.query('select * from teams ORDER BY score DESC',
            (err,result)=>{
                if(err) return reject(err)
                resolve(result.slice(0,10))
            })
        })
    }
}