// ------------------------------------
// createElement()
// appendChild()
// append()
// prepend()
// insertBefore()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------

/*     // CREATING ELEMENT -------------------------
const h1 = document.createElement("h1")
const body =  document.body

h1.textContent="Goodbye"
h1.classList.add("greetings")

body.appendChild(h1)

console.log(h1)
*/




// --------------------------------------------
// const ul = document.querySelector("ul")

// const newLi = document.createElement("li")
// newLi.textContent = "I'm an li tag"
// ul.appendChild(newLi)

// // selector.insertBefore(what,where)
// const firstLi = document.querySelector("li")
// ul.insertBefore(newLi,firstLi)


// --------------------------------------------
// const firstP = document.querySelector("p")
// const i = document.createElement("i")
// i.innerText="I'm italics"
// i.style.color='skyblue'

// firstP.insertAdjacentElement('beforebegin',i)
// firstP.insertAdjacentElement('afterbegin',i)
// firstP.insertAdjacentElement('beforeend',i)
// firstP.insertAdjacentElement('afterend',i)


// --------------------------------------------
// const section = document.querySelector("section")
// const i = document.createElement("i")
// i.innerText="I'm italics"
// i.style.color='skyblue'

// const span = document.createElement("span")
// span.innerText="Mahak"
// span.style.color='crimson'

// section.append(i,span)
// section.prepend(i,span)


// --------------------------------------------
const newList = document.querySelector(".new-list")
const fourth = document.querySelector(".fourth")
newList.removeChild(fourth)