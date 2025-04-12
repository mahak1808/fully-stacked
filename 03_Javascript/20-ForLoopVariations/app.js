// ---------- For...in Loop ---------------
// Used to iterate over enumerable properties of an object
// Loop through KEYS (property names) of an object

let person = {
  name: "Mahak", age: 22, gender: "female"
};

for(let i in person){
  console.log(i, person[i])
}

let list = ['one','two','three','four']
for(let i in list){   // index
  console.log(`${i}: ${list[i]}`)
}

// ---------- For...of Loop ---------------
// Introduced in ES6, concise way to loop over elements in iterable objects like arrays, strings, maps, sets, etc.
// Iterate directly over the VALUES of the elements, rather than their indices/keys

for(const i of list){
  console.log(i)
}

const myName = "Mahak Kaur"
for(let i of myName){
  console.log(i)
}

// ---------- For...each METHOD ---------------
// we pass anonymous callback function, when we call forEach helper.
// This function is called once for every element in the array
// Whatever's inside the function, that logic happens

const colors = ['teal','blue','red','green']

colors.forEach(color => console.log(color))   // here, we write an arrow func as a callback func



// Example
const words = ['hi','hello','hola','annyeong','namaste','satshriakal','ni hao','ohayo']

const capWords = words.forEach((word,index,arr) => {
  arr[index] = word[0].toUpperCase() + word.substring(1);
})

console.log(words);

// Example/Challenge
const numbers = [1,2,3,4,5]

let sum = 0;

function adder(number){
  sum+=number
}

numbers.forEach(adder)

console.log(sum)