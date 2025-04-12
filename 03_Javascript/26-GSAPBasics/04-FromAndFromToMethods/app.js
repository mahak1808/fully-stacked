// from() -> You don't have to specify the initial state
// It'll figure by itself

gsap.from(".box1",{
    y: -200,
    duration: 3,
    ease: 'linear',
    repeat: -1,
    yoyo: true
})

//  & fromTo() -> You have to specify the DEFAULT value and also the new animation state
gsap.fromTo(".box2",{
    y:200,opacity:0
},{
    opacity:1,y:-200,duration:3,ease:'linear',borderRadius:0,repeat:-1,yoyo:true
})