const hardData = require('./hardData.js');

var getRandomItem = function(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var getRandomRecords = function() {
  var records = [];
  var restaurantObject = {};

  for (var i = 0; i < 100; i++) {
    var rest_id = hardData.randomID();
    var name = getRandomItem(hardData.names);
    var type = getRandomItem(hardData.types);
    var price = getRandomItem(hardData.prices);
    var location = getRandomItem(hardData.locations);
    var foodScore = hardData.randomScore();
    var decorScore = hardData.randomScore();
    var serviceScore = hardData.randomScore();
    
    restaurantObject = {
      rest_id,
      name,
      type,
      price,
      location,
      foodScore,
      decorScore,
      serviceScore
    }
    records.push(restaurantObject);
  }
  return records
}

var seedData = getRandomRecords();
debugger;