import http from "k6/http";
import { sleep } from "k6";
// import faker from 'cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js';

const names = ['minima9999992', 'enim9999993', 'qui9999994', 'optio9999995', 'necessitatibus9999996', 'quia9999997', 'aut9999998', 'unde9999999', 'et10000000', 'consequatur9999991'];

const locations = ['quasi', 'et', 'quis', 'architecto', 'maxime', 'est', 'maiores', 'sunt', 'vel'];

const getById = (id) => {
  http.get(`http://localhost:3001/api/restaurants/${id}/reviews`)
}

const getByPrice = (pricesearch, location) => {
  http.get(`http://localhost:3001/api/restaurants/${pricesearch}&${location}`)
}

const getByName = (name) => {
  http.get(`http://localhost:3001/api/restaurants/${name}`)
}

const getByLocation = (location) => {
  http.get(`http://localhost:3001/api/restaurants/${location}/location`)
}

export let options = {
  vus: 500, 
  rps: 500, 
  duration: "1m"
};

export default function() {
  const distributeFx = Math.random();
  const id = Math.floor(Math.random() * 10000000) + 1;
  const pricesearch = Math.floor(Math.random() * 4) + 1;
  const getRandomLocation = Math.floor(Math.random() * 8);
  const location = locations[getRandomLocation];
  const getRandomName = Math.floor(Math.random() * 15);
  const name = names[getRandomName];
  if (distributeFx <= 0.5) {
    getById(id);
  }
  if (distributeFx > 0.5 && distributeFx <= 0.7) {
    getByPrice(pricesearch, location);
  }
  if (distributeFx > 0.7 && distributeFx <= 0.85) {
    getByName(name);
  }
  if (distributeFx > 0.85 && distributeFx <= 1) {
    getByLocation(location);
  }
  sleep(1);
};