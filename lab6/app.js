
/**
 * @file app.js
 * @author: Albert Tang
 * I pledge my honor that I abided by the Stevens Honor System.
 */

const express = require("express");
let constructorMethod = require("./routes");
let app = express();

app.use(express.static(__dirname + '/public'));

constructorMethod(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});