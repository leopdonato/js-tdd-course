// module.exports = {
//   sum: function (num1, num2) {
//     return num1 + num2;
//   },
//   sub: function (num1, num2) {
//     return num1 - num2;
//   },
//   mult: function (num1, num2) {
//     return num1 * num2;
//   },
//   div: function (num1, num2) {
//     return (num2 === 0) ? 'não é possível divisão por zero!' : num1 / num2;
//   }
// }

const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => (num2 === 0) ? 'não é possível divisão por zero!' : num1 / num2;
const FizzBuzz = (num) => {
  if (num === 0) return 0;
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';

  return num;
}

export { sum, sub, mult, div, FizzBuzz }
