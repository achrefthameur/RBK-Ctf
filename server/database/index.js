var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'spectra_65',
  database : 'Ctf_Rbk'
});

connection.connect();

module.exports = connection;