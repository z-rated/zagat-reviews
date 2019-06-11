const fs = require('fs');
const faker = require('faker');

const randomScore = function () {
  return (((Math.round(Math.random() * 50)) / 10)).toFixed(1);
};

const prices = ['$', '$$', '$$$', '$$$$'];

const getRandomPrice = (prices) => {
  return prices[Math.floor((Math.random()*4))];
}

const getPriceSearch = (price) => {
  if (price === '$') {
    return 1;
  }
  if (price === '$$') {
    return 2;
  }
  if (price === '$$$') {
    return 3;
  }
  if (price === '$$$$') {
    return 4;
  }
}

const writeStream = fs.createWriteStream('./database/sample4.csv');
const header = `id,restaurants,type,price,priceSearch,location,description,foodScore,decorScore,serviceScore,review` + '\n'
writeStream.write(header);
for (var i = 1; i < 10000001; i++) {
  const name = faker.lorem.word() + '' + i;
  const type = faker.lorem.word();
  const price = getRandomPrice(prices);
  const priceSearch = getPriceSearch(price);
  const location = faker.lorem.word();
  const description = faker.lorem.words();
  const foodScore = randomScore();
  const decoreScore = randomScore();
  const serviceScore = randomScore();
  const review = faker.lorem.sentence();
  const row = `${i},${name},${type},${price},${priceSearch},${location},${description},${foodScore},${decoreScore},${serviceScore},${review}\n`;
  writeStream.write(row);
}
writeStream.end();
writeStream.on('finish', function() {
  console.log("Write success.");
});
writeStream.on('error', function(err){
  console.log(err.stack);
});




