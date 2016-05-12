/// <reference path="utilityFunctions.ts" />
import util = Utility.Fees;
let fee = util.CalculateLateFee(10);
console.log(`Fee: ${fee}`);

// To Compile for Use with NodeJS issue the following CLI
// tsc --target ES5 appNs.ts --outFile <dir>/<fileName>.js
// node <dir>/<fileName>.js to run
