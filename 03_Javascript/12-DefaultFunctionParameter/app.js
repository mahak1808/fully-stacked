// Default Function Parameters (ES6) allow us to assign default values to function parameters.
// If a function is called w/o providing arguments, the default value will be used.

const greet = (name = "Mahak") => {console.log(`Hi, my name is ${name}`)}

// function greet(name = "Mahak"){
//     console.log(`Hi I'm ${name}`);
// }
greet("Meet")
greet(3)


const multiply = (a,b=1) => console.log(a*b)
multiply(9)
multiply(9,2)