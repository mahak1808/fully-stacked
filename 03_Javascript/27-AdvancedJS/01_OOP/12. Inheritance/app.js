// Inheritance allows a class to inherit properties & methods from another class.
// ES5 -> prototype-based inheritance
// ES6 -> Inheritance using 'extends' keyword

/*

// ------- ES5 CODE -----------
function Animal(name){
  this.name = name;
}

// Method shared among all Animal instances
Animal.prototype.makeSound = function(){
  return "Unknown Sound";
}

// Subclass constructor inheriting from Animal
function Dog(name){
  Animal.call(this,name); // call the superclass constructor
}

// Set up prototype chain to inherit from Animal
Dog.prototype = Object.create(Animal.prototype)

// Method specific to DOG
Dog.prototype.makeSound = function(){
  return "Woof!"
}

// Creating instances of the classes
const genericAnimal = new Animal("Generic Animal");
const dog = new Dog("Bruno")

console.log(genericAnimal.name)
console.log(genericAnimal.makeSound())

console.log(dog.name)
console.log(dog.makeSound())

*/

// ------- ES6 CODE -----------
// Superclass
class Animal{
  constructor(name){
    this.name = name;
  }

  makeSound(){
    return "Unknown Sound";
  }
}

// Subclass inheriting from Animal
class Dog extends Animal{
  constructor(name){
    super(name);
  }

  makeSound(){
    return "Woof!";
  }
}

// Creating instances of the classes
const genericAnimal = new Animal("Generic Animal");
const dog = new Dog("Bruno")

console.log(genericAnimal.name)
console.log(genericAnimal.makeSound())

console.log(dog.name)
console.log(dog.makeSound())


// ---------------- Define
// Animal defined using a constructor function. The Animal prototype has a makeSound() method that is shared among all instances of Animal.

// The subclass Dog is created by defining another constructor function that inherits from Animal. We use Object.create() to set up the prototype chain so that Dog.prototype inherits from Animal.prototype. This establishes the inheritance relationship.

// The Dog prototype also has its own makeSound() method, which overrides the makeSound() method from the Animal prototype. This demonstrates how the Dog subclass can provide its specific implementation for the makeSound() method while reusing other functionalities from the Animal superclass.

// With this setup, instances of Dog can access both the properties and methods of the Animal superclass, as well as any methods that have been specifically defined for the Dog subclass.
