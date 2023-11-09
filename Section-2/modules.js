// console.log(arguments);
// console.log(require("module").wrapper);

/// modules.export ///
const C = require("./test-module-1");
const calc1 = new C();
console.log(calc1.add(23, 43));

/// exports
// const calc2 = require("./test-module-2");
const { add, subtract, multiply, divide } = require("./test-module-2");
// console.log(calc2.add(12, 12));
// console.log(calc2.multiply(12, 10));
console.log(add(12, 12));
console.log(multiply(12, 10));

/// caching ///
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
