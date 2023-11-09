// class Calculator {
//   add(a, b) {
//     return a + b;
//   }
//   multiply(a, b) {
//     return a * b;
//   }
//   subtract(a, b) {
//     return a - b;
//   }
//   divide(a, b) {
//     return a / b;
//   }
// }

// module.exports = Calculator;

// Another way to do it efficiently

module.exports = class {
  add(a, b) {
    return a + b;
  }
  multiply(a, b) {
    return a * b;
  }
  subtract(a, b) {
    return a - b;
  }
  divide(a, b) {
    return a / b;
  }
};
