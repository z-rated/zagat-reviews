const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3000;

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'yourpassword'
  // database : 'my_db'
});

connection.connect();

app.connect();