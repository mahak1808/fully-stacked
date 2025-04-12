// ----------- DOM SELECTORS -------------
// We've to access all our methods and properties using document method.

// 1 -> getElementsByTagName
// h1 {} -> TO SELECT IN CSS
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1").length);

// 2 -> getElementById
// #name_of_ID {} -> TO SELECT IN CSS
console.log(document.getElementById("id-1"));
console.log(document.getElementById("main"));

// 3 -> getElementsByClassName
// .className {} -> TO SELECT IN CSS
console.log(document.getElementsByClassName("cls"))
console.log(document.getElementsByClassName("apple"))   //not present

// 4 -> querySelector
// Helps to select any element JUST like CSS selectors -> .,#,tagName
console.log(document.querySelector("h1"))
console.log(document.querySelector(".cls")) //will select the 1st one ONLY, if too many classes with the same name
console.log(document.querySelector("#id-1"))
console.log(document.querySelector("li"))

// 5 -> querySelectorAll
console.log(document.querySelectorAll("li"))    // will select all together

// ------------------ STORING DATA IN VARIABLES -----------------
//Since we've to console.log() too many times, we can simply store them in variables too
const h1 = document.querySelector("h1");
console.log(h1)