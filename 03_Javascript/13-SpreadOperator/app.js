// The spread operator is a new addition to the set of operators in JS ES6
// It takes in an iterable (eg: array) and expands it into individual elements.
// Commonly used to make shallow copies of JS objects
// Makes the code concise and enhances its readability

// We'll learn it with Functions, Arrays, and Objects

// ---------------- FUNCTIONS -------------------------
function giveMe4(a,b,c,d){
    console.log("a",a)
    console.log("b",b)
    console.log("c",c)
    console.log("d",d)
}

giveMe4(1,2,3,4)

const colors = ['red','purple','blue', 'green']
giveMe4(colors)
/*  O/P -> assigns whole array to 'a'
a [ 'red', 'purple', 'blue', 'green' ]
b undefined
c undefined
d undefined
*/
// TO SOLVE THIS, WE'LL USE THE '...' OPERATOR WHICH IS THE SPREAD OPERATOR
giveMe4(...colors)

// -------------- ARRAYS -------------------

const strNums = ['one','two','three']
const moreNums = ['four','five','six']
const concat = strNums.concat(moreNums)
const concatSpread = [...strNums, ...moreNums]

console.log(concat)
console.log(concatSpread)


let peeps = ['mahak','meet','preet']
console.log('dad & mom', ...peeps)

// --------------- OBJECTS -------------------

const obj1 = {x:1, y:2}
const obj2 = {z:3}
const obj3 = {...obj1, ...obj2}

console.log(obj3)

// copy/clone

let person = {
    name: "Mahak",
    age: 22,
    gender: "female"
}

const clone = {...person, location: "Kota"}

console.log(clone)

// ----------- CHALLENGE ----------------
let arr1 = [1,2,3]
let arr2 = [4,5]
const cloneArr = [...arr1, ...arr2]
console.log(cloneArr)


let user = {
    name: "Jen",
    age: 22
}
let cloneUser = {...user}
console.log(cloneUser)