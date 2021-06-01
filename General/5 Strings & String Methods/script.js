// Strings

const name = 'Vasile'; //String
const age = 27; // Number


//Concatenation
console.log(`My name is ${name} and I am ${age}`);


const s = 'Hello World!';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLocaleLowerCase());

console.log(s.substring(0, 5)); //Starts at 0 -> H, ends in 5 -> O

console.log(s.substring(0, 5).toLocaleUpperCase()); //we can chain them to each other


console.log(s.split(''));