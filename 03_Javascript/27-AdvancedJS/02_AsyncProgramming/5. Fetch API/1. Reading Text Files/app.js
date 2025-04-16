// How to read a text file using JS
// console.log(fetch("text.txt"));   // Promise{<pending}    // So, we can handle this error
// Using either callback, new Promise, async/await

// ------- USING PROMISE -----------

//text() method returns promise
// if resolved, returns text representation of the body

// ------------- IF USING TERMINAL ---------------
// const fs = require('fs').promises;
// const path = require('path');

// const filePath = path.join(__dirname, 'text.txt');

// fs.readFile(filePath, 'utf-8')
//   .then((text) => console.log(text))
//   .catch((e) => console.error(e));

// ---------- OR -----------------

// const fs = require('fs').promises;

// fs.readFile('/Users/mahakkaurchhabra/Documents/Web Development (2025)/03_Javascript/27-AdvancedJS/02_AsyncProgramming/5. Fetch API/1. Reading Text Files/text.txt', 'utf-8')
//   .then((text) => console.log(text))
//   .catch((e) => console.error(e));


// Fetch API promise only rejects when we have network error (not in other cases)
// ------------ IF USING BROWSER ----------
// fetch("text.txt")
//   .then((res) => res.text())
//   .then((text) => {console.log(text)})
//   .catch((e) => console.error(e));

// ------------ IF USING BROWSER ----------
const result = document.querySelector(".result");

// fetch("text.txt")
//   .then((res)=>{
//     if(!res.ok) throw Error(res.statusText);
//     return res.text();
//   })
//   .then((text) => {console.log(text)})
//   .catch((e) => console.error(e));

// ------------- REFACTOR THE ABOVE CODE --------------
async function renderData() {
  try {
    const response = await fetch('text.txt')  // READ THE DATA
    if(!response.ok) throw Error(response.statusText); 
    const data = await response.text()    // We're writing await here too, bec the above line will return a Promise
    result.textContent = data   // PUSHING THE DATA TO THE BROWSER
  } catch (error) {
    console.log(error)
  }
}

renderData()

// ---------------------------------------
// Using async/await (without Error Handling)
// const result = document.querySelector(".result");

// async function readData() {
//   const response = await fetch("text.txt");
//   const data = await response.text();
//   result.textContent = data;
// }

// readData();
// ---------------------------------------

// ---------------------------------------
// Using async/await (With Error Handling)
// const result = document.querySelector(".result");

// async function readData() {
//   try {
//     const response = await fetch("text.txt");
//     if (!response.ok) throw Error(response.statusText);
//     const data = await response.text();
//     result.textContent = data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// readData();
