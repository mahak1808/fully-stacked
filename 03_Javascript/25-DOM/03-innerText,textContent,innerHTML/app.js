// innerText

// textContent

// innerHTML

const p =document.querySelector("p")
console.log(p.innerText)    // gives us pure FORMATTED text, w/o any HTML tags or anything
console.log(p.textContent)  // gives us UNFORMATTED text, BUT NOT THE TAG
console.log(p.innerHTML)    // gives us BOTH unformatted text AS WELL AS tags within the document


// HOW TO CHANGE THE INNER TEXT OF AN ELEMENT
const h1 = document.querySelector("h1")
h1.innerText = "Text Changed"
h1.innerHTML = "<em>123</em>"