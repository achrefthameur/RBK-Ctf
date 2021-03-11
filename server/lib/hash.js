const crypto = require('crypto')


module.exports = {
    createHash : (data, salt = '') => {
        let shasum = crypto.createHash('sha256').update(data + salt).digest('hex');
        return shasum;
      },
      HashComparer : (User_Password , Stored_Password,salt)=>{
          return (Stored_Password === this.createHash(User_Password,salt))
      },
      RandomString : (length)=>{
        return crypto.randomBytes(length).toString('hex');
      }
      
}