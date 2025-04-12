// Template strings/literals allows us to create strings with embedded expressions.
// Denoted by backticks (``) INSTEAD of single or double quotes.
// Can construct strings more flexibly, especially when it involves variables or expressions.

console.log('Hello')
console.log('This is some\
    random text')

console.log(`This is some
            randoooooom texttttt`)      

// Expression ---------------------
console.log(`${2+2}`)

const fN = "Mahak"
const lN = "Kaur"
console.log(`${fN} ${lN}`)
console.log(`${['one','two'] + [1,2,3,4]}`)

function info(){
    return `This is a dummy function.`
}
console.log(`${info()}`)
