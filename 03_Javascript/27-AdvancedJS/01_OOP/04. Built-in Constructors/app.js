// Built-in constructors, also known as native constructors, are standard constructors provided by JavaScript that allow you to create objects of various data types.
// These constructors are available globally and do not need to be explicitly defined.
// They provide a convenient way to create instances of primitive data types and built-in objects.

// --> Number Constructor:
const num1 = new Number(10);
console.log(num1);
console.log(typeof num1);

const num2 = 10;
console.log(num2);
console.log(typeof num2);

// --> String Constructor
const str1 = new String("Hola");
console.log(str1);
console.log(typeof str1);

// --> Boolean Constructor
const bool1 = new Boolean(true);
console.log(bool1);
console.log(typeof bool1);

const bool2 = false;
console.log(typeof bool2); // Output: "boolean"

// --> Array Constructor
const arr1 = new Array(1, 2, 3);
console.log(arr1); // Output: [1, 2, 3]
console.log(Array.isArray(arr1)); // Output: true

const arr2 = [4, 5, 6];
console.log(arr2); // Output: [4, 5, 6]
console.log(Array.isArray(arr2)); // Output: true

// --> Object Constructor
const obj1 = new Object();
obj1.name = "John";
obj1.age = 30;
console.log(obj1); // Output: { name: "John", age: 30 }

const obj2 = { city: "New York" };
console.log(obj2); // Output: { city: "New York" }

// ==> and there are countless more...
