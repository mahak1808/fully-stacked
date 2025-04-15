// Prototypal inheritance is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects. 
// It is a fundamental concept in the language and is based on the prototype model. 
// In prototypal inheritance, objects can serve as prototypes for other objects, forming a hierarchical chain of inheritance.

// In JavaScript, every object has an internal property called [[Prototype]] (often referred to as __proto__), which points to its prototype object. 
// When you access a property or method on an object, and that property or method is not found in the object itself, JavaScript looks for it in the object's prototype (and further up the prototype chain, if needed) until it finds the property or reaches the top of the prototype chain, which is usually the Object.prototype.

// // Parent constructor function
function Animal(name){
  this.name = name;
}

// Adding a method to the prototype of Animal
// All instances of Animal constructor can access the sound()
Animal.prototype.sound = function(){
  return "Animal Sound"
}

// Child constructor function inheriting from Animal
// We CANNOT call sound() on Dog constructor bec, it's inherited by Animal, NOT Dog
function Dog(name,breed){
  Animal.call(this, name);    // calling all properties of Animal in this, BUT still sound() isn't inherited
  // this.name = name;
  this.breed = breed;
}

const animal1 = new Animal("Buddy");
const dogX = new Dog("Lucy","Dalmation");
console.log(dogX);
// console.log(dogX.sound())  // NOT available inside Dog() prototype
console.log(animal1.sound())

// ------ THIS DOESN'T WORK ----------
// Dog.prototype.sound = function(){
//   return "Animal Sound"
// }

// Set Dog's prototype to an instance of Animal to establish inheritance
Dog.prototype = Object.create(Animal.prototype);

const dogY = new Dog("Emma","Golden Retriever");
console.log(dogY.sound())

// Adding a method specific to Dog's prototype
Dog.prototype.bark = function () {
  return "Woof!";
};

// Creating a Dog instance
const dogZ = new Dog("Ella","Golden Buddy");

console.log(dogX.name); // Lucy
console.log(dogY.sound()); // Animal sound
console.log(dogX.breed); // Dalmation
console.log(dogZ.bark()); // Woof!

// --------------------------------------
// Super Class
// const Mobile = function () {
//   this.a = 10;
// };

// Mobile.prototype.z = 30;

// const Samsung = function () {
//   Mobile.call(this);
//   this.b = 20;
// };

// // Prototype Inheritance
// Samsung.prototype = Object.create(Mobile.prototype);
// Samsung.prototype.constructor = Samsung;

// const s = new Samsung();
// console.log(s.a);
// console.log(s.b);
// console.log(s.z);
