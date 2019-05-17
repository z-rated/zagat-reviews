const express = require('express');
const bodyParser = require('body-parser');
const database = require('../database/db.js');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/api/restaurants/:id/reviews', (req, res) => {
  // access id at req.params.id!!!
  database.getRecords((error, result) => {
    if (error) {
      console.log('Error in server!');
      res.status(500);
      res.end('error!');
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
