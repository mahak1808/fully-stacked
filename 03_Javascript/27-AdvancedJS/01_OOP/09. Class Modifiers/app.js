// Modifiers define visibility of class members (fields, methods, nested classes) from other parts of the program
// BUT JAVASCRIPT does NOT have modifiers, instead it has Class modifiers

// 4 pillars of OOP :- Encapsulation, Abstraction, Inheritance, Polymorphism

// Keywords:
// private -> can't access anything OUTSIDE of a class, only by its class objects. Can't be accessed by subclasses
// public -> everything is accessible publicly
// protected -> accessible ONLY inside the class, not OUTSIDE. CAN be accessed by subclasses
function MyClass(publicField,privateField,protectedField){
  // Public field
  this.publicField = publicField;

  // Private field (closure)(We use _ before the name of a var/obj to be kept private)
  const _privateField = privateField;

  // Protected Field
  const _protectedField = protectedField;

  // Public Method
  this.publicMethod = function(){
    return `Public Method: ${this.publicField}`
  }

  // Private Method
  function _privateMethod(){
    return `Private Method: ${_privateField}`
  }

  // Protected Method
  function _protectedMethod(){
    return `Protected Method: ${_protectedField}`
  }

  // Method to access protected method
  this.accessProtectedMethod = function(){
    return _protectedMethod()
  }
}

const obj1 = new MyClass("Public Data","Private Data","Protected Data");
// console.log(obj1)
// console.log(obj1.publicField)
// console.log(obj1._privateField)
// console.log(obj1._protectedField)

console.log(obj1.publicMethod())
// console.log(obj1._privateMethod())
// console.log(obj1._protectedMethod())
console.log(obj1.accessProtectedMethod());