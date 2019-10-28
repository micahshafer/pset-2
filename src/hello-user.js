const readlineSync = require("readline-syn");

const name = readlineSync.question("What is your name? \n ");
console.log("\nHello, " + name + "!");
