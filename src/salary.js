const readlineSync = require("readline-sync");

const salary = Number(readlineSync.question("\nAnnual salary: "));

const c = .07;    // 401k Contribution
const fit = .157;   // Federal income tax
const sit = .0447;    // State income tax
const sst = .062;   // Social security tax
const mt = .0145;   // Medicare tax
const paid = 24;    // Paychecks recieved

const alltaxes = fit + sit + sst + mt;
const firstdeduction = (1 - c) * salary;
const seconddeduction = (1 - alltaxes) * firstdeduction;
const totalpay = seconddeduction / 24;
const check = totalpay.toLocaleString('en-US', {style : 'currency' , currency: "USD"});

console.log("\n Your take-home pay each check will be " + check + "." )
