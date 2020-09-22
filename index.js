/*
***포트 5000에서 서버 열기***
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log('Welcome COG'))
*/
/*
***mysql test***
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'dlzmfflqtm67!',
  database : 'my_db'
});

connection.connect();

connection.query('SELECT * from Users', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();
*/
const express    = require('express');
const mysql      = require('mysql');
const dbconfig   = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);

const app = express();

// configuration =========================
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send('Welcome COG');
});

app.get('/users', (req, res) => {
  connection.query('SELECT * from Users', (error, rows) => {
    if (error) throw error;
    console.log('User info is: ', rows);
    res.send(rows);
  });
});

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});