// Destructuring allows us to 'unpack' values from data structures into separate distinct variables.

// --------- ARRAYS ----------------
const foo = ['one','two','three']
console.log(foo[0]);

const [a,b,c,d] = foo
console.log(a)
console.log(d)

let x, y
[x=1,y=5] = [2]
console.log(x);
console.log(y);

// --------- FUNCTIONS ----------------
function f(){
    return [1,2]
}

let m,n
[m,n]=f()
console.log(m, n)

function g(){
    return [1,2,3]
}
const [p, , q] = g()    // when you wanna ignore a value while destructuring, leave the space there for variable empty
console.log(p, q)

// ------------ ASSIGNING REST OF THE ARRAY TO A VARIABLE ---------------------
const [v1, ...v2] = ['one','two','three']
console.log(v2)

const colors = ['red','green','blue','yellow','orange']
const [color1, color2,color3]=colors
console.log(color1);
console.log(color2);
console.log(color3);


// --------- OBJECTS ----------------
// In object destructuring, the ORDER doesn't matter BUT the NAME does.

const student = {
    name: "Mahak",
    position: "First",
    rollNo: 21
}

const {name} = student
const {color} = student
console.log(name)
console.log(color)      // Because we DON'T have to label the data again

const {position, rollNo} = student
console.log(position)
console.log(rollNo)

// ---------- RENAMING VARIABLES IN OBJECTS -------------
const num = {num1: 100, num2:200}
const {num1:new1, num2:new2} = num
console.log(new1, new2)