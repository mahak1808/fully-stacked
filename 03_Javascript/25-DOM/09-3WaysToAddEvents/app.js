// ----------- BAD WAY-----------
// const secondBtn = document.querySelector(".second-btn")
// secondBtn.onclick=function(){console.log("Mahak")}
// secondBtn.onmousemove=function(){console.log("Mouse")}




// ----------- GREAT WAY-----------
// const best = document.querySelector('.best')
// best.addEventListener("click", function(){
//     console.log("Hello World")
// })



// ----------- Event (e) Object -----------
const form = document.querySelector("form")
const input = document.querySelector("input")
 
form.addEventListener("submit",(event)=>{
    event.preventDefault()  // prevents momemtary clg of the event, and stays longer/all the time
    console.log(event);
    console.log(input);
})