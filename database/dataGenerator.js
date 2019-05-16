const hardData = require('./hardData.js');

const getRandomItem = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

const getRandomRecords = function () {
  const records = [];
  let restaurantObject = {};
  let oneRestaurant = [];
  const allRestaurants = [];

  for (let i = 0; i < 100; i += 1) {
    const name = getRandomItem(hardData.names);
    const type = getRandomItem(hardData.types);
    const price = getRandomItem(hardData.prices);
    const location = getRandomItem(hardData.locations);
    const foodScore = hardData.randomScore();
    const decorScore = hardData.randomScore();
    const serviceScore = hardData.randomScore();

    restaurantObject = {
      name,
      type,
      price,
      location,
      foodScore,
      decorScore,
      serviceScore,
    };
    oneRestaurant.push(name, type, price, location, foodScore, decorScore, serviceScore);
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
