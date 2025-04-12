// SET method is used to set properties of an element BEFORE animating
gsap.set(".box",{
    opacity: 0,
    backgound: "yellow"
});

gsap.to(".box",{
    opacity: 1,
    background: "crimson",
    duration: 3,
    y:100,
    repeat: -1,
    yoyo: true
});