const readlineSync = require("readline-sync");

const hw = .15
const q = .35
const t = .50
const assignments = 3

//Three Homework Grades
const h1 = Number(readlineSync.question)("\n Enter three homework grades.\n");
const h2 = Number(readlineSync.question)("");
const h3 = Number(readlineSync.question)("");

//Three Quiz grades
const q1 = Number(readlineSync.queston)("\nEnter three quiz grades.\n");
const q2 = Number(readlineSync.question)("");
const q3 = Number(readlineSync.question)("");

//Three Test grades
const t1 = Number(readlineSync.question)("\nEnter three quiz grades\n");
const t2 = Number(readlineSync.question)("");
const t3 = Number(readlineSync.question)("");

const totalhw = ((hw1 + hw2 + hw3) / assignments) * hw;
const totalq = ((q1 + q2 + q3) / assignments) * q;
const totalt = ((t1 + t2 +t3) / assignments) * t;

const finalgrade = totalhw + totalq + totalt;
finalgrade = finalgrade.toFixed(2);

console.log("\n Your marking period grade is + finalgrade + %. ")
