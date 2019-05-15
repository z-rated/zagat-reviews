const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.use(express.static('./client/dist'))

app.use(bodyParser.json());

app.get('/reviews', (error, result) => {

})

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = {

}