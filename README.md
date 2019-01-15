![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Authentication

### Author: Siobhan Niess and Brent Woodward

### Links and Resources
* [repo](https://github.com/niesssiobhan/16-authentication)
* [travis](https://travis-ci.com/niesssiobhan/16-authentication)
* [server](https://git.heroku.com/niess-woodward-16-lab.git)

#### Documentation
* [swagger](http://xyz.com) (API assignments only)
* [jsdoc](http://xyz.com) (All assignments)

### Modules
#### `middleware.js`
#### `router.js`
#### `user-model.js`
#### `books.js`
#### `app.js`
#### `index.js`

##### Exported Values and Methods

### Dependencies
* Jest: `npm i jest` 
    * [docs](https://jestjs.io/docs/en/getting-started)
    * testing
* JSDoc: `npm i jsdoc`
    * [docs](http://usejsdoc.org/)
    * documentation
* cors: `npm i cors`
    * [docs](https://www.npmjs.com/package/cors)
    * enabling CORS
* dotenv: `npm i dotenv`
    * [docs](https://www.npmjs.com/package/dotenv)
    * loading environment variables
* express: `npm i express`
    * [docs](https://www.npmjs.com/package/express)
    * Web framework for node.
* mongodb-memory-server: `npm i mongodb-memory-server`
    * [docs](https://www.npmjs.com/package/mongodb-memory-server)
    * Programmatically creates a MongoDB Server for testing
* mongoose: `npm i mongoose`
    * [docs](https://www.npmjs.com/package/mongoose)
    * MongoDB object modeling tool
* mongoose-schema-jsonschema: `npm i mongoose-schema-jsonschema`
    * [docs](https://www.npmjs.com/package/mongoose-schema-jsonschema)
    * create json schema from Mongoose schema
* morgan: `npm i morgan`
    * [docs](https://www.npmjs.com/package/morgan)
    * HTTP request logger middleware for node.js

### Setup
#### `.env` requirements
* `PORT` - Port Number 3000
* MONGODB_URI=mongodb://localhost:27017/store

#### Running the app
* Open up two windows/tabs in your terminal
  * In the first window/tab run `nodemon`
  * In the second wimdow start by running the command `http :3000/signup -a <username:password>`
  * Then run the command `http :3000/signin -a <username:password>`
* Once you are logged in in you just have to make sure that you are hitting the right route _localhost:3000_
  
#### Tests
* How do you run tests?
  *npm test
* What assertions were made?
* What assertions need to be / should be made?

#### UML
(Photo of UML for Lab 16 - Authentication)[./assets/lab16.jpg]