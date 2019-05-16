const express = require('express');
const mysql = require('mysql');
// const dataGenerator = require('./dataGenerator.js');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'restaurants',
});

connection.connect();

app.connect();

// The Original code I used to insert records:

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = `INSERT INTO restaurants (name, type, price,
// location, foodScore, decorScore, serviceScore) VALUES ?`;
//   var values = dataGenerator.seedData;
//   connection.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   });
// });
