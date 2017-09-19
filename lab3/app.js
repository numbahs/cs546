/**
 * @file app.js
 * @author: Albert Tang
 * I pledge my honor that I abided by the Stevens Honor System.
 */

const {
    getFileAsString,
    getFileAsJSON
} = require("./fileData");

getFileAsString('chapter1.txt')
.then(res => console.log(res))
.catch(err => console.error(err))