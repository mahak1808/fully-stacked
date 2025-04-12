// gsap.method(Element,varsObj)


// ------ Most common way to animate in GSAP is using the .to(), think of it like animating an object to a certain position
gsap.to(".box",{
    x: 100,
    duration: 2,
    repeat: 1          // -1 -> inf times, 2 -> 3 times
})