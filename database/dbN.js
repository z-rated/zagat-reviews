const Pool = require('pg').Pool


const pool = new Pool({
  host: 'localhost',
  database: 'zagat',
})

const getReviewById = (id, callback) => {
  pool.query(`SELECT * FROM reviews WHERE id = ${id}`, (err, result) => {
    if (err) {
      callback(err);
    }
    else {
      callback(null, result);
    }
  })
}

const getByPriceandLocation = (pricesearch, location, callback) => {
  pool.query('SELECT * FROM reviews WHERE pricesearch<$1 AND location=$2 limit 300', [pricesearch, location],  (err, result) => {
    if (err) {
      callback(err);
    }
    else {
      callback(null, result);
    }
  })
}

const getByName = (name, callback) => {
  pool.query(`SELECT * FROM reviews WHERE name=$1`, [name], (err, result) => {
    if (err) {
      callback(err);
    }
    else {
      callback(null, result);
    }
  })
}

const getByLocation = (location, callback) => {
  pool.query(`SELECT * from reviews WHERE location=$1 limit 300`, [location], (err, result) => {
    if (err) {
      callback(err);
    }
    else {
      callback(null, result);
    }
  })
}

const postReview = (name, type, price, pricesearch, location, description, foodscore, decorscore, servicescore, review, callback) => {
  pool.query(`INSERT INTO reviews (id, name, type, price, pricesearch, location, description, foodscore, decorscore, servicescore, review) VALUES (nextval('start_at_end'), $1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`, [name, type, price, pricesearch, location, description, foodscore, decorscore, servicescore, review], (err, result) => {
    if (err) {
      callback(err);
    }
    else {
      callback(null, result);
    }
  })
}

const deleteReview = (id, callback) => {
  pool.query(`DELETE FROM reviews WHERE id = $1`, [id], (err, result) => {
    if (err) {
      callback(err);
    }
    else {
      const success = 'succesfully deleted'
      callback(null, success);
    }
  })
}

module.exports = {
  getReviewById,
  getByPriceandLocation,
  getByName,
  getByLocation,
  postReview,
  deleteReview
}