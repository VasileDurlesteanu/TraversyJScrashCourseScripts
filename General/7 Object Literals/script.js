const person = {
  firstName: 'John',
  lastName: 'Doe', 
  age: 27,
  hobbies: ['music', 'movies' , 'sports'],
  address: {
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
  }
}

console.log(person.firstName, person.lastName);

console.log(person.hobbies[1]);
console.log(person.address.city);


const { firstName, lastName, address: {city}} = person;

console.log(city);


person.email = 'john@gmail.com';

console.log(person);