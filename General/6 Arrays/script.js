// Arrays - variables that hold multiple values

const numbers = new Array(1,2,3,4,5);

console.log(numbers);


const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';

fruits.push('mangos');

fruits.unshift('strwaberries');

fruits.pop();

console.log(Array.isArray(fruits)); // to check if array is true

console.log(fruits.indexOf('oranges'));

console.log(fruits);