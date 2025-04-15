// Concept of bundling data and methods together within an object
// Helps to hide the implementation deets and exposes ONLY necessary interfaces to interact with the object

// In JavaScript, we can achieve encapsulation by using closures to create private members.

function Counter(){
  let _count = 0   // Private variable
  
  // Public method that can access and modify the private variable
  this.increment = function(){
    _count++;
  }

  this.decrement = function(){
    _count--;
  }

  this.getCount = function(){
    return _count;
  }
}

const c1 = new Counter();
console.log(c1.getCount())

c1.increment();c1.increment();c1.increment();c1.increment();
console.log(c1.getCount())

c1.decrement();c1.decrement();
console.log(c1.getCount())

console.log(c1._count); // error cus can't access a private var OUTSIDE of a class/cosntructor

// ----------------- Define
// In this example, we create a Counter constructor function, and inside it, we define a private variable count using the let keyword. The increment, decrement, and getCount functions are defined as public methods, accessible from outside the object.

// Since the private variable count is defined inside the Counter constructor function, it forms a closure. The public methods have access to this private variable due to the lexical scope of JavaScript closures.

// The key idea here is that the count variable is not directly accessible from outside the Counter object. The public methods increment, decrement, and getCount provide controlled access to the private variable, allowing us to modify or retrieve its value indirectly. This way, we achieve encapsulation by hiding the internal implementation details of the Counter object and exposing only the necessary interface for interacting with it.
