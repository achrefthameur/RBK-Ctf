var connection = require('../database')

module.exports={
    GetOne:(username)=>{
        return new Promise((resolve,reject)=>{
            connection.query('select * from users where username=?',
            [username],
            (err,result)=>{
                if(err) return reject(err)
                return resolve(result)
            })
        })
    },
    Create:(user,salt)=>{
        return new Promise((resolve,reject)=>{
            connection.query('INSERT into users (username,password,score,salt,name,lastname,email) VALUES (?,?,0,?,?,?,?)',
            [user.username,user.password,salt,user.name,user.lastname,user.email],
            (err,result)=>{
                if(err) return reject(err)
                return resolve(result)
            })
        })
    },
    GetTop:()=>{
        return new Promise((resolve,reject)=>{
            connection.query('select * from users ORDER BY score DESC',
            (err,result)=>{
                if(err) return reject(err)
                resolve(result.slice(0,10))
            })
        })
    },
    updateScore:(id,score)=>{
        return new Promise((resolve,reject)=>{
            connection.query('update users SET score = score + ? where id=?',
            [score,id],
            (err,result)=>{
                if(err) return reject(err)
                resolve(result)
            })
        })
    }
}