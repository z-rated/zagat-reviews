const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

const dataGenerator = require('./dataGenerator.js');
const port = 3000;

// var string = `CREATE TABLE restaurants(rest_id INT AUTO_INCREMENT, name VARCHAR(255) NOT NULL, type VARCHAR(255) NOT NULL, price INT NOT NULL, location VARCHAR(255) NOT NULL, foodScore VARCHAR(5) NOT NULL, decorScore VARCHAR(5) NOT NULL, serviceScore VARCHAR(5) NOT NULL, PRIMARY KEY (rest_id))`;

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'yourpassword',
  database : 'restaurants'
});

// connection.connect(); /////////////

app.connect();

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (rest_id, name, type, price, location, foodScore, decorScore, serviceScore) VALUES ?";
  var values = dataGenerator.seedData;
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});