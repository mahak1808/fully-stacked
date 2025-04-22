const hero = document.querySelector("#hero-img");

gsap.fromTo(hero, {
    scale: 0,
    opacity: 0
},{
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: 'linear',
    
})