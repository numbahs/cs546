/**
 * @file app.js
 * @author: Albert Tang
 * I pledge my honor that I abided by the Stevens Honor System.
 */

const {
    getFileAsString,
    getFileAsJSON,
    saveStringToFile,
    saveJSONToFile
} = require("./fileData");
let path = require('path');

getFileAsJSON(path.join(__dirname, 'chapter1.txt'))
.then(res => console.log(res))
.catch(err => console.error(err));