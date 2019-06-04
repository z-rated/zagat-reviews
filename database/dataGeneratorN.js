const zlib = require('zlib');
const fs = require('fs');
const faker = require('faker');
const hardData = require('./hardData.js');

const randomScore = function () {
  return (((Math.round(Math.random() * 50)) / 10)).toFixed(1);
};

const prices = ['$', '$$', '$$$', '$$$$'];

const getRandomPrice = (prices) => {
  return prices[Math.floor((Math.random()*4))]
}

fs.appendFile('./database/data.csv', `id,restaurants,name,type,price,location,description,foodScore,decorScore,serviceScore,review` + '\n', (err) => {
  if (err) {
    console.log('fail to write to csv file');
  } else {
    console.log('succesfully saved to csv file');
    for (var i = 0; i < 100; i++) {
      const name = faker.lorem.words();
      const type = faker.lorem.word();
      const price = getRandomPrice(prices);
      const location = faker.lorem.word();
      const description = faker.lorem.sentence();
      const foodScore = randomScore();
      const decoreScore = randomScore();
      const serviceScore = randomScore();
      const review = faker.lorem.paragraph();
      fs.appendFile('./database/data.csv', `${i},${name},${type},${price},${location},${description},${foodScore},${decoreScore},${serviceScore},${review}\n`, (err) => {
        if (err) {
          console.log('fail to write to csv file');
        } else {
          console.log('successfully saved 100');
        }
      })
    }
  }
})



