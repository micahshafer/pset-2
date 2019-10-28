const readlineSync = require("readline-sync");

const Width = readlineSync.question("\nWidth: ");
const Length = readlineSync.question("Length: ");
const w = Width;
const l = Length;
const r = Math.sqrt(Math.pow(w,2) + Math.pow(1,2)).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nA(n) " + w + "-by-" + 1 + "-inch sheet of paper has a diagonal of " + r +"inch(es).");
