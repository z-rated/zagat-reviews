const fs = require('fs');
const faker = require('faker');

const randomScore = function () {
  return (((Math.round(Math.random() * 50)) / 10)).toFixed(1);
};

const prices = ['$', '$$', '$$$', '$$$$'];

const getRandomPrice = (prices) => {
  return prices[Math.floor((Math.random()*4))]
}

const writeStream = fs.createWriteStream('./database/data.csv');
const header = `id,restaurants,type,price,location,description,foodScore,decorScore,serviceScore,review` + '\n'
writeStream.write(header);
for (var i = 1; i < 10000001; i++) {
  const name = faker.lorem.words();
  const type = faker.lorem.word();
  const price = getRandomPrice(prices);
  const location = faker.lorem.word();
  const description = faker.lorem.sentence();
  const foodScore = randomScore();
  const decoreScore = randomScore();
  const serviceScore = randomScore();
  const review = faker.lorem.words();
  const row = `${i},${name},${type},${price},${location},${description},${foodScore},${decoreScore},${serviceScore},${review}\n`;
  writeStream.write(row);
}
writeStream.end();
writeStream.on('finish', function() {
  console.log("Write success.");
});
writeStream.on('error', function(err){
  console.log(err.stack);
});




