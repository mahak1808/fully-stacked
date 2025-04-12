// -------------------- MAP ---------------------
// It's a data structure (introduced in ES6) that represents a collection of unique values.
// Unlike arrays, set allows you to store only UNIQUE values, i.e, DUPLICATES are already removed.
// Useful when u wanna store list of unique elements and quickly check for existence of a specific value.

const initialValues = [1,2,3,2,4,3,4,5]
const set = new Set(initialValues)

console.log(set)

// Example

const mySet = new Set();
mySet.add('apple')
mySet.add('banana')
mySet.add('orange')
mySet.add('apple')

console.log(mySet)
// console.log(mySet.has('apple'))

// mySet.delete('banana')
// console.log(mySet)
// mySet.clear()
// console.log(mySet)

for(let item of mySet){
    console.log(item)
}


// EXAMPLE

const letters = new Set()
letters.add("a")
letters.add("b")
letters.add("c")

console.log(letters)

for (let i of letters){
    console.log(i)
}