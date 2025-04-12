// -------------------- SYMBOLS ---------------------
// It is a unique and IMMUTABLE primitive data type introduced in ES6.
// Often used as an identifier for object properties to avoid potential naming conflicts.
// Unlike strings/numbers, symbols are always UNIQUE.
// It's unique & can't be recreated/changed.
// This uniqueness ensures that symbols will not collide with other property names, even if they have the same string representation.

const mySymbol = Symbol("My custom Symbol")
console.log(mySymbol)

// Comparing Symbols ----------------------
const sym1 = Symbol("name")
const sym2 = Symbol("name")

console.log(sym1===sym2)

const obj = {}
obj[sym1]='Value 1';
obj[sym2]='Value 2';
console.log(obj)



// Example
const symbol1 = Symbol('name')
const symbol2 = Symbol('name')

const mahak = {}
mahak.age = 22
mahak['gender'] = 'female'  // initialised a property
mahak['gender'] = 'male'    // changed the value
mahak[symbol1] = 'john'
mahak[symbol2] = 'alex'
console.log(mahak)


// -------- CHALLENGE -----------
const foo = Symbol()
console.log(typeof foo)

let emptyObj = {
    fn:"Mahak",ln: "Kaur"
}
emptyObj[Symbol("foo")]='some value for foo'
console.log(emptyObj)
for (let i in emptyObj){
    console.log(i)
}