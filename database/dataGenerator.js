const faker = require('faker');
const hardData = require('./hardData.js');

const getRandomItem = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

const randomScore = function () {
  return (((Math.round(Math.random() * 50)) / 10)).toFixed(1);
};

const getRandomRecords = function () {
  const records = [];
  const restaurantObject = {};
  let oneRestaurant = [];
  const allRestaurants = [];

  for (let i = 0; i < 100; i += 1) {
    const name = getRandomItem(hardData.names).toUpperCase();
    const type = getRandomItem(hardData.types);
    const price = getRandomItem(hardData.prices);
    const location = getRandomItem(hardData.locations);
    const description = getRandomItem(hardData.descriptions);
    const foodScore = randomScore();
    const decorScore = randomScore();
    const serviceScore = randomScore();
    const review = faker.lorem.paragraph();

    oneRestaurant.push(name, type, price,
      location, description, foodScore,
      decorScore, serviceScore, review);
    allRestaurants.push(oneRestaurant);

    oneRestaurant = [];

    records.push(restaurantObject);
  }
  return allRestaurants;
};

const seedData = getRandomRecords();

module.exports = {
  seedData,
};
