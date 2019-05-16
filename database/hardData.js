var names = ["SOMA", "SF's Best", "Pizza Palace", "Mt. Fuji", "Bravo Pizza",
  "Not Your Average Joe's", "D&M'S B&B", "Marnya Supreme", "Yang Ming", "Sang Kee",
  "Hullabaloo", "Today's Croissants", "Moolah Moolah", "Beach Noise", "Sweet Daisy's",
  "Eat At Joe's", "Nothing With Avocado", "Time To Eat", "Palermo's", "Jose and Joe's",
  "Brady Brunch", "Every Sunday", "Table 49", "The Pharmacy", "Wings & Burgers", 
  "La Capra", "A Slice Is Nice", "Sugar & Spice", "Gerhard's", "Fish In The Sea"];


var types = ["Italian", "American", "Chinese", "Japanese", "Singaporean", 
  "Asian Fusion", "French", "British", "Irish", "Vietnamese", "New Californian", "Seafood"];

var prices = [1, 2, 3, 4];

var locations = ["467 Holly Street", "88 Tehama Avenue", "732 Market Road", "738 Broad Way",
"901 Pine Boulevard", "345 Fisher's Way", "526 Lafayette Manor"];

var randomScore = function() {
  var randomScore = (((Math.round(Math.random() * 50)) / 10)).toFixed(1);
  return randomScore;
}

var randomID = function() {
  return Math.round(Math.random() * 100);
}

module.exports= {
  names,
  types,
  prices,
  locations,
  randomScore,
  randomID
};