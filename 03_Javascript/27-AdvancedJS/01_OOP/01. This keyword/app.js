// console.log(window)  // window object is the heart of DOM
// console.log(this) // refers to window object    // global object
// console.log(this===window);

window.firstName = "Mahak"    // creates a variable inside the 'window' object
this.lastName = "Kaur"
console.log(window)

// --------- THIS IN A FUNCTION -------------

function printThis(){
  return this;
}

console.log(printThis())


// -------- THIS INSIDE AN OBJECT -------------
const obj = {
  fN: "Mahak",
  lN: "Kaur",
  fullName: function(){
    // return this;      // owner is 'obj', so it'll return the whole object 'obj'
    return `${this.fN} ${this.lN}`;
  }
}
console.log(obj.fullName());

// -------------------------------------------
// IF YOU USE THIS KEYWORD INSIDE AN ARROW OBJECT/FUNCTION -> IT'LL ALWAYS REFER TO 'Window' OBJECT
const objArrow = {
  fN: "Mahak",
  lN: "Kaur",
  fullName: () => `${this.fN} ${this.lN}`
    // return this;      // owner is 'obj', so it'll return the whole object 'obj' 
  
}
console.log(objArrow.fullName());