// --------- FUNCTION DECLARATION -----------------
// This can easily be called before the function is declared.
function isEven (num){
    if(num%2==0){console.log("Even number")}
    else{console.log("Odd Number")}
};

(isEven(50))


// --------- FUNCTION EXPRESSION (when we store function in a variable) -----------------
// This can't be called before the function is declared.

// console.log(multiply(5,7))
const multiply = function (a,b){
    return a*b;
}

console.log(multiply(5,8))


// ------------ CALLBACK FUNCTION -------------------
// When a function is entered as argument to another function, that function is called a callback function.

function showCallFunc(fn){
    const value = 10;
    fn(value)
}

showCallFunc(function callbackFunc(x){
    console.log(x*x);
});


// -------------------------
function greet(name, cb){
    console.log(`Hello ${name}`)
    cb()
}

function callMe(){
    console.log(`I am a callback function.`)
}

function square(a){
    return a*a;
}

// greet('Mahak',callMe)
// greet('Mahak',square(5)); // WRONG WAY

// RIGHT WAY --------------------------------
greet('Mahak', function() {
    console.log(square(5));
});


console.log('PRACTICE QUESTION')

function showCallFunction(fn){
    const val = 10
    fn(10)
}

/*
function cbf(x){
    console.log(x)
}

showCallFunction(cbf)
*/

// -------- OR ---------

showCallFunction(function(value){
    console.log(value)
})

