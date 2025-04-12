// classlist -> gives no. of classes associated with an element
// add() -> Add class to an element
// remove() -> Remove class from an element
// toggle() -> If the element has the class specified in toggle()'s parameter, it'll remove it AND if it doesn't, it will add it to the element.

const h1 = document.querySelector("h1")
console.log(h1.classList)

h1.classList.add("styles")  // we removed it's class from HTML file, and added the class here
console.log(h1.classList)

h1.classList.remove("styles")
console.log(h1.classList)

h1.classList.toggle("styles")