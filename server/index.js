require('newrelic');
const express = require('express');
const CORS = require('cors');
const bodyParser = require('body-parser');
// const database = require('../database/db.js');
const db = require('../database/dbN.js');
const app = express();
const port = 3005;


app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(CORS());
app.use(express.static(`${__dirname}/../client/dist`));

// app.get('/api/restaurants/:id/reviews', (req, res) => {
//   const id = req.params.id;
//   database.getRecords((error, result) => {
//     if (error) {
//       console.log('Error in server!');
//       res.status(500);
//       res.end('error!');
//     } else {
//       res.status(200);
//       res.json(result);
//     }
//   }, id);
// });

app.get('/api/restaurants/:id/reviews', (req, res) => {
  const id = req.params.id;
  console.log(id);
  db.getReviewById(id, (err, data) => {
    if (err) {
      res.status(400);
      res.send(err);
    }
    else {
      res.status(200);
      res.send(data.rows);
    }
  })
})

app.get(`/restaurants/price`, (req, res) => {
  const pricesearch = req.query.pricesearch;
  const location = req.query.location;
  db.getByPriceandLocation(pricesearch, location, (err, data) => {
    if (err) {
      res.status(400);
      res.send(err);
    }
    else {
      console.log(data)
      res.status(200);
      res.send(data.rows);
    }
  })
})

app.get('/restaurants/name', (req, res) => {
  const name = req.query.name; 
  db.getByName(name, (err, data) => {
    if (err) {
      res.status(400);
      res.send(err);
    }
    else {
      res.status(200);
      res.send(data.rows);
    }
  })
})

app.get('/restaurants/location', (req, res) => {
  const location = req.query.location;
  db.getByLocation(location, (err, data) => {
    if (err) {
      res.status(400);
      res.send(err);
    }
    else {
      res.status(200);
      res.send(data.rows);
    }
  })
})

app.post('/restaurant/new', (req, res) => {
  const name = req.body.name;
  const type = req.body.type;
  const price = req.body.price;
  const pricesearch = req.body.pricesearch;
  const location = req.body.location;
  const description = req.body.description;
  const foodscore = req.body.foodscore;
  const decorscore = req.body.decorscore;
  const servicescore = req.body.servicescore;
  const review = req.body.review;
  db.postReview(name, type, price, pricesearch, location, description, foodscore, decorscore, servicescore, review, (err, result) => {
    if (err) {
      res.status(400);
      res.send(err);
    }
    else {
      res.status(200);
      res.send(result);
    }
  })
})

app.delete('/api/restaurants/:id/reviews', (req, res) => {
  const id = req.params.id;
  db.deleteReview(id, (err, result) => {
    if (err) {
      res.status(400);
      res.send(err);
    }
    else {
      res.status(200);
      res.send(result);
    }
  })
})










// app.put('/api/restaurants/:id/reviews', (req, res) => {
//   const id = req.params.id;
//   const description = req.body.description;
//   database.updateRecords((error, result) => {
//     if (error) {
//       res.status(500);
//       res.send(error);
//     } else {
//       res.status(200);
//       res.send();
//     }
//   }, id, description)
// })

// app.delete('/api/restaurants/:id/reviews', (req, res) => {
//   const id =req.params.id;
//   database.deleteRecords((error, result) => {
//     if (error) {
//       res.status(500);
//       res.send(error);
//     } else {
//       res.statusCode(200);
//       res.send();
//     }
//   }, id)
// })

// app.post('/api/restaurants/:id/reviews', (req, res) => {
//   const name = req.body.name;
//   const type = req.body.type;
//   const price = req.body.price;
//   const location = req.body.location;
//   const description = req.body.description;
//   const foodScore = req.body.foodScore;
//   const decorScore = req.body.decorScore;
//   const serviceScore = req.body.serviceScore;
//   const review = req.body.review;
//   database.createRecords((error, result) => {
//     if (error) {
//       res.statusCode(500);
//       res.send(error);
//     } else {
//       res.statusCode(200);
//       res.send();
//     }
//   }, name, type, price, location, description, foodScore, decorScore, serviceScore, review)
// })

app.listen(port, () => console.log(`Listening on port ${port}`));