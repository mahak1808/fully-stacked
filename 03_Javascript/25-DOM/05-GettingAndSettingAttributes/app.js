// Attributes :-
// href -> gives the value of the href as o/p
// value
// type
// getAttribute(attrName)
// setAttribute(attrName, value)



// --------- GETTING ATTRIBUTES --------------
const a = document.querySelector("a")
console.log(a.href)
// console.log(a.href)

const input = document.querySelector("input")
console.log(input)
console.log(input.value)
console.log(input.type)


// --------- SETTING ATTRIBUTES --------------
// console.log(a.href = "https://www.youtube.com/@introverted_seoul")  // changes the value of href on the actual element
// console.log(input.value="Hello")
// console.log(input.type="password")
console.log(input.placeholder="Please provide a strong password")


// getAttribute(attrName)
console.log(input.getAttribute("type"))

// setAttribute(attrName, value)
input.setAttribute("placeholder","Password")
input.setAttribute("type","password")