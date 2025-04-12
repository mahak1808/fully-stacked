// Arrow functions are also called FAT ARROW functions
// It's a shorter and concise way to define functions in JS.
// Introduced in ECMAScript 6 (ES6) and provides a more compact syntac compared to traditional function expressions

function greet(username){
    return `Hello ${username}`
};

// doesn't need () if function has ONLY one parameter.
// can remove return and {} if only ONE LINE CODE
// wish = (username) => {
//     return `Hello ${username}`      
// };

wish = username => `Hello ${username}`      


console.log(greet('Mahak'))
console.log(wish("Mahak"))

const double = number => number*2
console.log(double(5))

// ----------- CHALLENGE EXERCISE -------------
const a = setTimeout(() => {
    console.log("Hello")
    setTimeout(() => {
        console.log("Hey")
        setTimeout( () => {
            console.log("Namaste")
            setTimeout(() => {
                console.log("Hi")
                setTimeout(() => {
                    console.log("Bonjour")
                },2000) 
            },2000)
        },2000)
    },2000)
},2000)