const readlineSync = require("readline-sync");

const s = Number(readlineSync.question("\nStudents: "));
const t = Number(readlineSync.question("Teachers: "));
const bs = Number(readlineSync.queston("Bus Capacity: "));

const pass = s + t;   // Passangers
const bss = Mathceil(pass / bs);
const passreman = pass % bs;

console.log("\n" bss + " bus(es) is (are) needed, with " + (passreman) + " passanger(s) on the last bus.")
