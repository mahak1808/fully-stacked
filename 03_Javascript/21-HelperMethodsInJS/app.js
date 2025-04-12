// ---------- MAP() ------------------
// Creates a new array populated with the results of calling a provided function on every element in the calling array
// Similar to forEach() but forEach() doesn't create a new array and makes changes in the original itself
let nums = [1,2,3,4,5]
let double = nums.map(num => num*2)
console.log(double)

// Example
let people = [
    {firstName: "Mahak", lastName: "Kaur"},
    {firstName: "Meet", lastName: "Singh"},
    {firstName: "Preet", lastName: "Singh"}
]
const result = people.map(person =>{
    return [person.firstName,person.lastName]
})

console.log(result)

// ---------- FILTER() ------------------
// Creates a new array containing elements that pass a certain condition
const divBy2 = nums.filter(num => num%2==0)
console.log(divBy2)

// Example
const computers = [
    {ram: 4, hdd: 100},
    {ram: 8, hdd: 200},
    {ram: 16, hdd: 300},
    {ram: 32, hdd: 400}
]
console.log(computers.filter(need => need.ram>16))

// Example
const words = ['spray','limit','elite','exuberant','destruction','present']
const moreThan6 = words.filter(see => see.length>6)
console.log(moreThan6)

// ---------- FIND() ------------------
// Allows us to find the first element in the array that matches a specific condition.
// Returns the value of the 1st element that satisfies the given testing func, or undefined if no element is found.
const output = computers.find(it => it.ram>8)
console.log(output)     // only outputs the 1st one


// ---------- EVERY() and SOME()------------------
// They allow us to check the elements of an array, based on a given condition
// Both tahke a callback function as an argument, which is applied to each element

// EVERY() tests whether all elements in the array pass the condition
// RETURNS a boolean value


// SOME() tests wheter atleast ONE element in the array satisfies the condition 
// RETURNS a boolean value

const num1 = [1,2,3,4,5]
const num2 = [3,6,9,12,15]

console.log(num1.every(it => it>2))
console.log(num1.some(it => it>2))

console.log(num2.every(it => it%2==0))
console.log(num2.some(it => it%2==0))

// ---------- REDUCE() ------------------
// Applies the reducer function to each element of an array, accumulating results into a dingle value.
// Used to perform calculations/aggregations on array elements and simplify the array into a single value
// DOES NOT change the original array, MAKES a copy and performs function on that.
// DOESN'T work on empty array

const sum = num1.reduce((p,c) => {
    console.log(`Previous: ${p}`)
    console.log(`Current: ${c}`)
    return p+c; //previous value and current value
},0);
console.log(sum)

// Example
const peeps = [
    {name: "Mahak", age: 22},
    {name: "Meet", age: 25},
    {name: "Preet", age: 20}
]

const oldestAge = peeps.reduce((p,c) => {
    if(p>c.age){return p}
    else{return c.age}
},0)
console.log(`Oldest age: ${oldestAge}`)

// Example
const fruits = ['apple','banana','orange','banana','apple','orange','apple','grape'];
const wordFrequency = fruits.reduce((frequencyMap, word)=>{
    frequencyMap[word] = (frequencyMap[word] || 0)+1    // If the word exists in the map, use its value. If not, start from 0.
    return frequencyMap
},{});
console.log(wordFrequency)


// Example
function calculatedProduct(arr){
    let mult = 1;
    for(const i of arr){
        mult*=i;
    }
    return mult;
}

const number_arr = [2,3,4,5];

const reducedCalculateProduct = number_arr.reduce((p,c)=>{
    return p*c;
},1);

const product = calculatedProduct(number_arr)
console.log(product)
console.log(reducedCalculateProduct)