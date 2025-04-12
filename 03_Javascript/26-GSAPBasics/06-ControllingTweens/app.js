let play = document.querySelector(".play")
let pause = document.querySelector(".pause")
let restart = document.querySelector(".restart")

let tween = gsap.to(".box1",{
    y: -200,
    duration: 5,
    backgroundColor: "pink",
    repeat: -1,
    yoyo: true
});


// play(), pause(), restart() are provided by GSAP itself
play.addEventListener("click",()=>tween.play());
pause.addEventListener("click",()=>tween.pause());
restart.addEventListener("click",()=>tween.restart());