const hardData = require('./hardData.js');

var getRandomItem = function(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var getRandomRecords = function() {
  var records = [];
  var restaurantObject = {};
  var oneRestaurant = [];
  var allRestaurants = [];

  for (var i = 0; i < 100; i++) {
    // var rest_id = hardData.randomID();
    var name = getRandomItem(hardData.names);
    var type = getRandomItem(hardData.types);
    var price = getRandomItem(hardData.prices);
    var location = getRandomItem(hardData.locations);
    var foodScore = hardData.randomScore();
    var decorScore = hardData.randomScore();
    var serviceScore = hardData.randomScore();
    
    restaurantObject = {
      name,
      type,
      price,
      location,
      foodScore,
      decorScore,
      serviceScore
    }
    oneRestaurant.push(name, type, price, location, foodScore, decorScore, serviceScore);
    allRestaurants.push(oneRestaurant);
    oneRestaurant = [];

    records.push(restaurantObject);
  }
  debugger;
  return allRestaurants;
}

var seedData = getRandomRecords();
// console.log(seedData);

module.exports = {
  seedData
}