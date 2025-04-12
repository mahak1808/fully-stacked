// ------------- CONDITIONAL STATEMENTS ------------------------

/*
if === money -> buy some stuff
else !== money -> bring some money dude
*/

// let a=10, b=20
// if(a>b){
//     console.log('a is greater than b')
// }
// else{
//     console.log('a is less than b')
// }

// ----------------- CHALLENGE
/*
let password;
if(password == 8){console.log('Welcome')}
else if(password<=8){console.log('Password is too short')}
else if(password>=8){console.log('Too Long Password');console.log('Password should be 8 characters')}
else(console.log('Please provide a password'))
*/




// ------------- SWITCH STATEMENTS ------------------------
/*
let letter = 'i'

switch(letter){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log('Vowel')
        break;
    
    default :
        console.log('Consonant')

}
*/




// ------------- FOR LOOP ------------------------
// for(i=0;i<10;i++){
//     console.log('Hi Mahak',i);
// }

// ------------- WHILE LOOP ------------------------
// i=0
// while(i<10){
//     console.log(i)
//     i++
// }

// ------------- DO-WHILE LOOP ------------------------
// i=10
// do{
//     console.log(i)
//     ++i
// }while(i<10)




// ------------- LOGOCAL OPERATORS ------------------------
// -----> AND (&&)
// -----> OR (||)
// -----> NOT (!)

a = true, b=false, c=4
console.log(a&&b)
console.log(a&&c)   // outputs value, i.e, c
console.log(a||b)
console.log(!a)

let password = "Mahak-kaur"

if(password.length >= 8 && password.includes('aur')){
    console.log('Valid Password')
}
else{console.log('Invalid Password')}
