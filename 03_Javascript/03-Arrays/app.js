
// const myList = [1,2,3]
// console.log(myList)

// const stringArray = ['a','e','i','o','u']
// console.log(stringArray)

// console.log(stringArray[2])

// Nested array -------------------------
/* const nestArr = [1, ['Hi','Hola','SatShriAkal'],4,5]
console.log(nestArr[1])
console.log(nestArr[1][2])
console.log(nestArr)
*/

// ------------- BASIC ARRAY METHODS ---------------------
// 1. concat()
const arr1 = [1,3,5]
const arr2 = [2,4,6]
console.log(arr1.concat(arr2))

// 2. includes()
console.log(arr1.includes(2))

// 3. push() -> adds a new element at the end of array and returns the new length
console.log(arr1.push(7))
console.log(arr1)

// 4. unshift() -> adds a new element at the BEGINNING of array and returns the new length
console.log(arr1.unshift(9))
console.log(arr1)

// 5. pop() -> removes last element from the array and returns the removed element
console.log(arr1.pop())

// 6. shift() -> removes FIRST element from the array and returns the removed element
console.log(arr1.shift())
console.log(arr1)

// 7. sort()
const arr3 = [3,1,5,2,4]
console.log(arr3.sort())

// 8. slice() -> selects part of array and returns the new array
console.log(arr3.slice(1,3))

// 9. splice() -> removes/replaces existing elements and/or adds new elements
console.log(arr3.splice(1,2))
console.log(arr3)

// 10. join()
console.log(arr1.join('-'))

// 11. reverse()
console.log(arr1.reverse())
console.log(arr1.slice(0,2))