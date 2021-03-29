const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let sum = 0;
  matrix.forEach(element => {
    element.forEach(elem => {
      if (elem == "^^") {
        sum += 1;
      }
    })
  })
  return sum;
};