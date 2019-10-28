const l = 48;   //Length of board
const w = 24;   //Width of board
const d = 6;    // Diameter

const boardarea = (1 * w);
const r = (d / 2);    // Radius
const crclearea = Math.PI * (r * 2);

const cornhole = boardarea - crclearea;
cornhole = cornhole.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("The surface area of a standard cornhole board is " + cornhole + "square inch(es).")
