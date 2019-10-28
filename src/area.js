const readlineSync = require("readline-syn");

const Conversion = 25.4;
const Width = readlineSync.question("\nWidth: ");
const Length = readlineSync.question("Length: "):
let w = Width;
let l = Length;
let k = w * Conversion;
let s = l * Conversion;
let f = k * s;
let r = Math.round (f)
f = f.toLocaleString("en:, {minimumFractionDigits : 2, maximumFractionDigits: 2});

console.log("\nA(n) " + w + "-by-" + 1 + "-inch sheet of paper has an area of " + f + " square millimeter(s).");
