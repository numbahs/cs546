/*
 * I pledge my honor that I have abided by the Stevens Honor System. - Albert Tang
 * Albert Tang
 * Lab 2
 */
const {
    triangle,
    square,
    rhombus
} = require("./printShape");

 for(let i = 1; i < 11; i++) {
     console.log(triangle(i));
     console.log(square(i + 1));
     console.log(rhombus(i * 2));
 }