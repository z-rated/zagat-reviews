const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '172.17.0.2',
  user: 'user2',
  password: 'somepassword',
  database: 'restaurants',
});

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

module.exports = {
  getRecords,
};
