// Constructor functions in JavaScript are regular functions used with the new keyword to create and initialize objects with shared properties and methods.
// They act as blueprints for creating multiple instances of objects with the same structure and behavior.

// -------------- CONSTRUCTOR FUNCTION ------------
// First letter should ALWAYS be capital -> convention; but not necessary; but good to follow
function CreatePeople(firstName,lastName,pl){
  this.firstName = firstName  //window BUT because we use the 'new' keyword to create an instance of this Constructor, it points to that new instance INSTEAD of the 'window' object
  this.lastName = lastName
  this.pl = pl
}

// -------- Creating instances
const mahak = new CreatePeople("Mahak","Kaur","CPP");
console.log(mahak)

// NEW KEYWORD: (What happens behind the scene)
// 1. First create empty object {}
// 2. Sets "this" to point to that object
// 3. We can omit the return statement using "new" keyword


// ------------ Example 2 -----------------
function Book(title,author,year){
  this.title = title
  this.author = author
  this.year = year
}

// Creating instances using the constructor function
const potter = new Book("Harry Potter and the Cursed Child","J.K. Rowling", 2015)
console.log(potter)
