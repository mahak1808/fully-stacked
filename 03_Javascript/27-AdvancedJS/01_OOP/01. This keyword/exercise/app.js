// Create a person object and store your name & age
const person = {
  name: "Mahak",
  age: 22,
  greetRegular: function(){
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`
  },
  greetArrow: () => {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`
  }
};

// Also create a method name (greetRegular) by using a regular function, INSIDE THE OBJECT
// Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`


// Create one more method name (greetArrow) using arrow function, INSIDE THE OBJECT
// Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`


console.log(person.greetRegular());
console.log(person.greetArrow());