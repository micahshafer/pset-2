const readlineSync = require("readline-sync");

const hourly = readlineSync.question("\nHourly wage: ");

const m = readlineSync.question("\nMonday: ");
const t = readlineSync.question("Tuesday: ");
const w = readlineSync.question("Wednesday: ");
const th = readlineSync.question("Thursday: ");
const f = readlineSync.question("Friday: ");
const st = readlineSync.question("Saturday: ");
const s = readlineSync.question("Sunday: ");

const weeklypay = (m * hourly) + (t * hourly) + (w * hourly) + (th * hourly) + (f * hourly) + (st * hourly) + (s * hourly)

console.log ("\n You'll make " + $ + Math.abs(weeklypay).toFixed(2) + "this week. ")
