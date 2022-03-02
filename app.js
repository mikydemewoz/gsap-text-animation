const words = ["Michael.", "A Son", "A Brother", "A Developer."]

let cursor = gsap.to('.cursor', 
{
    opacity: 0, 
    ease: "power2.inOut", 
    repeat: -1
})

let boxTL = gsap.timeline()

boxTL.to('.box', {duration: 1, width: "17vw",delay: 0.5, ease: "power4.inOut"})
.from('.hi', {duration: 1, y: "7vw", ease: "power3.Out", onComplete: () => masterTL.play()})
.to('.box', {duration: 1, height: "7vw", ease: "elastic.out"})
.to('.box', {duration: 2, autoAlpha: 0.5, yoyo: true, repeat: -1})

let masterTL = gsap.timeline({repeat: -1}).pause()

words.forEach(word => {
    let t1 = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1})
    t1.to('.text', {duration: 1, text: word})
    masterTL.add(t1)
})