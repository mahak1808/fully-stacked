// alert("Hello, I'm Mahak");
// console.log("Hi Mahak");

// console.log(2+2);
// console.log(typeof({name : "Mahak"}));

// console.warning('This is a warning');
// console.error('This is a warning');

// console.table({name: "Mahak", age: "22", occupation: "Student"});

// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.clear();
// console.log("Hello");
// console.log("Hello");

// console.log("Hi");   // write 'log' or 'clg' for console.log()
// console.log('yo');




// --------------- VARIABLES ------------------------
// (reserved keyword) (variable name) (type of value)
// (var/const/let)

// let name=5;
// console.log(name);

// name=7
// console.log(name);

// console.log(x);
// var x=3;

// console.log(y);
// let y=7;


// ------ VARIABLES CHALLENGE -------
/* let name='Mahak';
let dreamJob='programmer';
let gender='female';
let twitterHandle='@mahak1808';
console.log(name)
console.log(dreamJob);
console.log(gender);
console.log(twitterHandle)
*/






// --------------- PRIMITIVE TYPES ------------------------
//  1. NUMBERS

// let num=10.95;console.log(typeof(num));
// console.log(3/2)
// console.log(2**3);

// let counter = 0;
// counter++;
// console.log(counter++);
// console.log(counter);


// ------ NUMBERS CHALLENGE -------
/* let firstFavNum=5, secondFavNum=7;
console.log(firstFavNum+secondFavNum);
console.log(firstFavNum-secondFavNum);
console.log(firstFavNum*secondFavNum);
console.log(firstFavNum/secondFavNum);
console.log(firstFavNum%secondFavNum);
console.log(firstFavNum**secondFavNum);
*/


//  2. BOOLEAN
// let isTrue=true;
// console.log(isTrue);

// let a = NaN;    // NotANumber
// console.log(a)

// let num = 10;
// console.log(num+undefined);

/* ----------- FALSY VALUES ---------------

-> false, null,undefined, 0, -0, NaN, '', "", ``, (empty quotes)

*/




// --------------- OPERATORS ------------------------

// COMPARISON OPERATORS
// -> Relational -> (>,<,>=,<=) ------------------
// console.log(10>10)
// console.log(10<10)


// -> Equality ----------------------------------
// === strict equality (type+value)
// !== or =≠= strict non-equality operator (type+value)
// == loose equality (value)
// ≠ or != loose non-equality (value)

// console.log(10===10)
// console.log(10==='10')
// console.log(10===20)
// console.log(10!=='10')

// console.log(10==10)
// console.log(10=='10')
// console.log(10!=10)




// --------------- STRINGS ------------------------
// let firstName = "Mahak"
// let lastName = `Kaur`

/* console.log(firstName)
console.log(lastName)

let fullName = "Mahak `Kaur`"
let fullName2 = `Mahak "Kaur"`
let fullName3 = '"Mahak" `Kaur`'

console.log(fullName)
console.log(fullName2)
console.log(fullName3) */

// 1. CONCATENATION --------------------
// let fullNameConcatted = firstName.concat(lastName)
// console.log(fullNameConcatted)

// fullNameConcatted = firstName+lastName
// console.log(fullNameConcatted)

// 2. APPEND ---------------------------
// firstName += " something else"
// console.log(firstName)

// 3. LENGTH ---------------------------
// console.log(firstName.length)

// 4. CASES ----------------------------
// console.log(firstName.toUpperCase())
// console.log(firstName.toLowerCase())

// 5. SLICE ---------------------------
// console.log(firstName.slice(1,3))
// console.log(firstName.slice(0,3))

// 6. SPLIT AND JOIN ------------------
// console.log(firstName.split('a'))
// console.log(firstName.split('h'))
// console.log(firstName.split('a').join('A'))

// 7. INCLUDES ------------------------
// console.log(firstName.includes('a'))
// console.log(firstName.includes('A'))

// 8. TRIM ----------------------------
// console.log(firstName.trim())


// ----------------   `` and  ""      ------------------------
/* let str = "This is an
example 
    string" */   // GIVES ERROR

/*
let str = `This is an
example 
    string`

console.log(str)

let fName = "Mahak", lName = "Kaur"
let fullName = `${fName} ${lName} anything`
console.log(fullName)
console.log(lName.toUpperCase())

let favGroup = "BTS"
let message = `My fav group is ${favGroup} and I love their music a lot.`
console.log(message)
*/



// --------------- TYPE CONVERSION ------------------------

// let money = 50

// CONVERT INT TO STRING ------------------------
// money = money.toString()
        // OR
// money = String(money)       // String Constructor

// console.log(typeof money)
// console.log(money)

// CONVERT STRING TO INT -------------------------
// money = parseInt(money)  
        // OR
// money = +money
        // OR
// money = Number(money)       // Number Constructor

// console.log(typeof money)
// console.log(money)


// CONVERT STRING TO DECIMAL ----------------------
let money = "50.245"
money = parseFloat(money)

console.log(typeof money)
console.log(money)