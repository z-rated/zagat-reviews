const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'restaurants',
});

connection.connect(function(err) {
  if (err) {
    console.log('error connecting MySQL');
  }
  console.log('Connected to MySQL');
});
//READ 
const getRecords = function (callback, restaurantNumber) {
  console.log(restaurantNumber);
  const getRecordsString = `SELECT * FROM restaurants WHERE rest_id = ${restaurantNumber}`;
  connection.query(getRecordsString, (error7, result) => {
    if (error7) {
      callback(error7, null);
    } else {
      callback(null, result);
    }
  });
};

// //UPDATE: update a value for a specific property 
// const updateRecords = (callback, id, description) => {
//   console.log(id);
//   console.log(description);
//   const queryString = `UPDATE restaurants SET description = "${description}" WHERE rest_id = ${id}`;
//   connection.query(queryString, (error, result) => {
//     if (error) {
//       callback(error, null);
//     } else {
//       callback(null, result);
//     }
//   })
// }

// //DELETE: delete a restaurant 
// const deleteRecords = (callback, id) => {
//   const queryString = `DELETE FROM restaurants WHERE rest_id = ${id}`;
//   connection.query(queryString, (error, result) => {
//     if (error) {
//       callback(error, null);
//     } else {
//       callback(null, result);
//     }
//   })
// }

// //CREATE 
// const createRecords = (callback, name, type, price, location, description, foodScore, decorScore, serviceScore, review) => {
//   const queryString = `INSERT INTO restaurants (name, type, price, location, description, foodScore, decoreScore, serviceScore, review) values ("${name}", "${type}", "${price}", "${location}", "${description}", "${foodScore}", "${decorScore}", "${serviceScore}", "${review}")`;
//   connection.query(queryString, (error, result) => {
//     if (error) {
//       callback(error, null);
//     } else {
//       callback(null, result);
//     }
//   })
// }

module.exports = {
  getRecords,
  // updateRecords,
  // deleteRecords,
  // createRecords
};
