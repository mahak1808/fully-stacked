// Every javascript object has a anonymous property called prototype
// Remember functions & arrays are also a object
// that prototype will be the parent of that object, prototype property is object by itself, which have some special properties & methods

const obj = {};
console.log(obj)    // output: {} (in browser console -> Prototype: Object)
// HERE, the 1st object is 'obj' and the 2nd is '[[Prototype]]:Object' which is hidden OR inside the 'obj'

// Every object is associated with another object.
// The object (obj) is associated with [[Prototype]] Object
// -> which means obj object will inherit all properties of Object.prototype || [[Prototype]]

// We can check the prototype of something in 3 ways:
// --> obj.__proto__
// --> obj.constructor.prototype
// --> Object.getPrototypeOf(a)
console.log(obj.__proto__);
console.log(obj.__proto__.__proto__);   // Prototype of parent of parent

console.log(obj.constructor.prototype);

console.log(Object.getPrototypeOf(obj));

const arr = new Array()
console.log(arr.__proto__);

// ------ CONSTRUCTOR FUNCTION ---------
function Person(fN,lN){
  this.fN = fN;
  this.lN = lN
}

const mahak = new Person("Mahak","Kaur");
console.log(mahak)
console.log(mahak.__proto__)


// ********* Changing the Built-in Methods *****************
console.log(Array.prototype);
Array.prototype.pop = function () {
  return "POP IT UP BABE";
};

const myArr = ["one", "two", "three"];
console.log(myArr.pop()); // POP IT UP BABE


// ********* We can define our own method as well *************
String.prototype.hello = function () {
  console.log(this);
  console.log(this.toUpperCase());
};

"this is a string".hello(); // Uppercase : THIS IS A STRING
