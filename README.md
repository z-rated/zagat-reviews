# Project Name

A recreation of the frontend for Zagat's reviews page (example: https://www.zagat.com/r/benu-san-francisco.)

This JavaScript app serves static HTML files through an Express server using a 
Webpack bundle that transpiles a React & jQuery frontend populated with MySQL data.

## Related Projects

Repo link for the photo module at the top of Zagat's page:
  - https://github.com/the-notorious-f-e-c/zagat-photos-service

Repo link for the map module at the side of Zagat's page:
  - https://github.com/the-notorious-f-e-c/zagat-restaurant-info

Repo link for the Google Reviews module at the bottom of Zagat's page:
  - https://github.com/the-notorious-f-e-c/zagat-google-reviews

Repo link for the Zagat reviews module in the middle of Zagat's page:
  - https://github.com/the-notorious-f-e-c/zagat-reviews

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
4. [API](#API)
5. [Dependencies](#Dependencies)
6. [Authors](#Authors)
7. [License](#License)
8. [Acknowledgments](#Acknowledgments)

## Usage

1.) To seed the database:

  [ npm run seed ]

2.) To start the server:

  [ npm run start ]

3.) To make webpack watch files:

  [ npm run react-dev ]

4.) To run Jest & Enzyme tests:

  [ npm run test ]

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
— Express
— Webpack
— React
— jQuery
— Jest
— Enzyme

## Development

## API

Route to an endpoint for a specific review of restaurant: 
/api/restaurants/:id/reviews

### GET Request
The /GET requests for the 100 random data records that dataGenerator.js stores in a MySQL database 'restaurants'. A GET request will return the review data for an existing restaurant

Response:

result[0] = {
    rest_id: 1,
    name: "CAFE BEAUJOLAIS",
    type: "Japanese",
    price: "$$$$",
    location: "Tenderloin",
    description: "Museum's bistro for star chef's recipes",
    foodScore: "2.7",
    decorScore: "2.4",
    serviceScore: "0.2",
    review: "Iure modi eos et expedita. Itaque est cupiditate similique laborum dolorem voluptatum quos. Placeat autem ut exercitationem et. Porro culpa rerum et debitis in voluptates sit sit perferendis. Velit deleniti nostrum ut sunt maxime animi quia sit. Beatae itaque tempora sed quo et ut."
},

### UPDATE request
The /UPDATE request changes the review data for an existing restaurant 
* Send the specific id of restaurant from the endpoint and send new data in request body 
* Query the database to update the data sent for the restaurant corresponding to the id 

Response: Status Code 201

### DELETE request
The /DELETE request deletes an existing restaurant from the database 
* Send the specific id of restaurant from the endpoint
* Query the database to delete the review of restaurant corresponding to the id

Response: Status Code 200

### CREATE request 
The /CREATE request adds new reviews to an restaurant without reviews
* Send the specific id of restaurant from the endpoint and the new review data in request body 
* Query the database to create a new id with the sent data 

Response: Status Code 200







## Dependencies

From within the root directory:

```sh

General Set-up:

npm init
npm install webpack
npm install babel
npm install jquery
npm install react
npm install react-dom
npm install react-scripts

Tests:

npm install jest
npm install enzyme
npm install enzyme-adapter-react-16

Database and Data:

npm install faker
npm install mysql

Linting:

npm install husky
npm install eslint
npm install lint-staged
```

## Authors

Martin Connor (mepc36@gmail.com)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgements

Sang Park, Nick Vincent-Hill, Destiny Walker, Connor Homan, Roger Dunn, Eugenia Ong, Rafe Autie, Eric Soderholm
