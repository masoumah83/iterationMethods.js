// task 1.1

//const numbers = [10, 13, 20, 25, 38, 35, 40];
//let equelorgrater = [];
//numbers.forEach((num) => {
//if (num >= 25) equelorgrater.push(num);
//});
//console.log(equelorgrater);

const numbers = [10, 13, 20, 25, 38, 35, 40];
let equelorgrater = numbers.filter((num) => {
  if (num >= 25) {
    return true;
  }
});
console.log(equelorgrater);

// task 1.2
//const numbers1 = [10, 13, 20, 25, 38, 35, 40];

//task 2
//Q3
const numbers2 = [2, 4, 6, 8];
let squares = numbers2.map((num) => {
  return num * num;
});
console.log(squares);

//task 2
//Q4

const numbers3 = [2, 4, 6, 8];
let multi = numbers3.map((num) => {
  return num * 2;
});
console.log(multi);

//task 3
//Q5
const numbers4 = [10, 13, 20, 25, 38, 35, 40];
let result = numbers4.filter((num) => {
  if (num >= 20) return true;
});
let result2 = result.map((result) => {
  return result ** 2;
});
console.log(result2);
