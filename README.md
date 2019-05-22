# Project Name

A recreation of the frontend for Zagat's reviews page (example: https://www.zagat.com/r/benu-san-francisco.)

This app serves static HTML files with MySQL data on an Express server using a Webpack bundle that transpiles a React & jQuery structure.

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
1. [Requirements](#requirements)
1. [Development](#development)

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

## Development

### Installing Dependencies

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

Database & Data:
npm install faker
npm install mysql

Linting:
npm install husky
npm install eslint
npm install lint-staged
```

