
/**
 * @file lab7.js
 * @author: Albert Tang
 * I pledge my honor that I abided by the Stevens Honor System.
 */

const express = require("express");
const morgan = require('morgan');
const constructorMethod = require("./routes");
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json());
app.use(morgan('dev'));

constructorMethod(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});