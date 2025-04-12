// Enhanced Object Literals were introduced in ES6
// They are a set of enhancements to the syntax for defining objects in JS
// This makes it more convenient to define object properties and methods

function user(name,age,work){
    // return{
    //     name: name,
    //     age: age,
    //     work: work
    // };               // When property and value are coded as same names
    return{
        name,age,work,
        // calling a method -> if wanna use enhance literals, remove function keyword.
        // intro: function(){
        //     console.log(`My name is ${name}, I'm ${age} years old, and I'm a ${work}.`)
        // }
        //  OR ARROW FUNCTION ->    intro: () => {//body of the function}
        intro(){
            console.log(`My name is ${name}, I'm ${age} years old, and I'm a ${work}.`)
        }
    };
    

}

const mahak = user("Mahak",22,"Student");
const alex = user("Alex",25,"Designer")
console.log(mahak.intro())

var a=1, b=2, c=3;
obj = {a,b,c}
console.log(obj)


// ES5 object
var lib = {
    sum: function(a,b){
        return a+b;
    },
    mult: function(a,b){
        return a*b;
    }
};

// ES6 object
// const lib = {
//     sum(a,b) {return a+b;},
//     mult(a,b) {return a*b;}
// }
//      OR
// ES6 object
// const lib = {
//     sum: (a,b) => a+b,
//     mult: (a,b) => a*b
// }

// console.log(lib.sum(2,3))
// console.log(lib.mult(2,3))


// ES5 -> ES6
function getPersonES5(name,age,weight){
    return{
        name: name,
        age: age,
        weight: weight
    };
}

function getPersonES6(name,age,weight){
    return{name,age,weight};
}

console.log(getPersonES5("Mahak",22,70))
console.log(getPersonES6("Meet",25,50))