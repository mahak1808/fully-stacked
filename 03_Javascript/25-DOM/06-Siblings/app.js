const firstLi = document.querySelector("li")
// console.log(firstLi)
// console.log(firstLi.parentElement.parentElement.parentElement)

// const ul = document.querySelector("ul")
// console.log(ul)
// console.log(ul.children)
// console.log(ul.children[0])
// console.log(ul.children[3])

// console.log(ul.children[0].innerText='one')

console.log(firstLi.nextElementSibling.textContent)
console.log(firstLi.nextElementSibling.nextElementSibling.textContent)


let fourthLi = document.querySelector(".fourth")
console.log(fourthLi)
console.log(fourthLi.previousElementSibling)
