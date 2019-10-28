const readlineSync = require(readline-sync");

const Width = readlineSync.question("\nWidth: ");
const Length = readlineSync.question("Length: ");
const Conversion = 2.54;
let w = Width;
let l = Length;
let k = w * Conversion;
let s = l * Conversion;
let f = 2 * k + 2 * s;
let r =Math.round (f)
f = f.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nA(n) " + w + "-by-" + 1 + "-inch sheet of paper has an area of " + f + "square centimeter(s).");
