const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'restaurants',
});

const getRecords = function (callback) {
  const getRecordsString = 'SELECT * FROM restaurants';
  connection.query(getRecordsString, (error7, result) => {
    if (error7) {
      callback(error7, null);
    } else {
      callback(null, result);
      console.log('Records retrieved!');
    }
  });
};

module.exports = {
  getRecords,
};
