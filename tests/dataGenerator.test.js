const dataGenerator = require('../database/dataGenerator.js');

test('dataGenerator\'s array of seededData should have 100 records', () => {
  expect(dataGenerator.seedData.length).toBe(100);
});

test('each record inside dataGenerator\'s array of seededData should have 8 properties', () => {
  for (let i = 0; i < dataGenerator.seedData.length; i += 1) {
    expect(dataGenerator.seedData[i].length).toBe(9);
  }
});
