// The rest parameter syntax allows a function to accept an indefinite no. of arguments.
// As an array, providing a way to represent variadic functions in JS
// Variadic functions are those that accept a limited amount of parameters

// Variadic function
// A rest parameter must be at the last in function definition
function user(x,...userData){
    console.log(x)
    console.log(userData)
}

user("Mahak",22,"Programmer","Female")