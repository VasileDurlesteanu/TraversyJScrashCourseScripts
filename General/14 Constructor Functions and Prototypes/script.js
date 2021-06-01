// Constructor function
function Person(firstname, lastname, dob) {
  this.firstName = firstName;
  this.lastName = lastName; 
  this.dob = new Date(dob);
  this.getBirthYear = function(){
    return this.dob.getFullYear();
  }
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person2.dob);