// -------------------- MAP ---------------------
// It's a data structure (introduced in ES6) that helps store key-value pairs where both key and value can be of any data type.
/* Similar to an object BUT with few key differences :
    -> KEYS CAN BE OF ANY DATA TYPE : Unlike objects, where keys are limited to strings & symbols, here keys can be of any data types -> Numbers, Boolean, Objects, other Map instances
    -> MAINTAINS INSERTION ORDER : It preserves the order of K-V pairs as they were inserted, while object keys may not be guaranteed to be in a specific order.
    -> ITERATION : It provides built-in methods for easy iteration over its elements.
*/

const map = new Map();

const K1 = "string";
const K2 = {};
const K3 = function(){};    // anonymous func

map.set(K1, "Value of key one")
map.set(K2, "Value of key two")
map.set(K3, "Value of key three")

console.log(map)
// console.log(map.keys())
// console.log(map.values())

// console.log(map.delete(K2))
// console.log(map)
// console.log(map.size)

// ------------ ITERATING ---------------
for(let [key,value] of map){
    console.log(`${key} -- ${value}`)
}

for( let key of map.keys()){
    console.log(key);
}

for(let value of map.values()){
    console.log(value)
}


// ------- CHALLENGE -----------
const alphabets = new Map();

// const a1 = 'a', a2 = 'b', a3 = 'c';

alphabets.set("a",1)
alphabets.set("b",2)
alphabets.set("c",3)

console.log(alphabets.get("a"))
console.log(alphabets.size)

alphabets.delete("b")
console.log(`Size after deleting: ${alphabets.size}`)