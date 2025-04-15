// Classes are one of the features introduced in the ES6 version of JavaScript.
// A class is a blueprint for the object. You can create an object from the class.

// You can think of the class as a sketch (prototype) of a house. 
// It contains all the details about the floors, doors, windows, etc. 
// Based on these descriptions, you build the house.

// Since many houses can be made from the same description, we can create many objects from a class.

// Class Declaration
class Person {
  constructor(fN,lN,age){
    // instance members
    this.fN = fN;
    this.lN = lN;
    this.age = age;
    this.printUser = function(){
      console.log(`I'm ${this.fN} ${this.lN} and I'm ${this.age} years old.`);
    };
  }

  // Prototype members for classes
  greet(){
    return `Hello there ${this.fN} ${this.lN}`;
  }
}

// INSTANCE OF A CLASS
const mahak = new Person("Mahak","Kaur",22)
mahak.printUser()
console.log(mahak.greet())

// ------------- INHERITANCE IN CLASSES --------------
class Programmer extends Person{
  constructor(fN,lN,age,pl,experience){
    // super();  // this just calls the parent class' constructor
    super(fN,lN,age);
    this.pl = pl;
    this.experience = experience;
  }
}

// INSTANCE OF 'Programmer' CLASS
const meet = new Programmer("Meet","Singh",25,"JS",0);
console.log(meet.greet())