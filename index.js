const bar = document.querySelectorAll(".bar")
const h1 = document.getElementById("h1")
const cube = document.querySelector(".cube")
const topOfCube = document.querySelector(".top")
const frontOfCube = document.querySelector(".front")
const backOfCube = document.querySelector(".back")
const rightOfCube = document.querySelector(".right")
const bottomOfCube = document.querySelector(".bottom")
const leftOfCube = document.querySelector(".left")

const shadow = document.querySelector(".shadow")
const entireHamburgerMenu = document.querySelector(".toggle-hamburger-menu")

entireHamburgerMenu.addEventListener('click', animate)
cube.addEventListener("click", animatedOnClickCube)


function animate(){
    gsap.from(bar, {duration: 2, x: -100, rotate: -360, stagger: 0.25})

}

function animatedOnClickCube(){
    gsap.from(topOfCube, {duration: 3, x: () => Math.random() * 400 - 200, rotate: -360})
    gsap.from(frontOfCube, {duration: 4, x: () => Math.random() * 400 - 200, rotate: 360})
    gsap.from(backOfCube, {duration: 5, x: () => Math.random() * 400 - 200, rotate: -360})
    gsap.from(rightOfCube, {duration: 6, x: () => Math.random() * 400 - 200, rotate: 360})
    gsap.from(leftOfCube, {duration: 5, x: () => Math.random() * 400 - 200, rotate: -360})
    gsap.from(bottomOfCube, {duration: 6, x: () => Math.random() * 400 - 200, rotate: 1080})
}



gsap.from(bar, {duration: 2, x: -100, y: 100, rotate: -360, stagger: 0.25})
gsap.from(h1, {duration: 5, y: () => Math.random() * 400 - 200, rotate: 360, stagger: 0.25})
gsap.from(shadow, {duration:1.5, y: -300})
// y: () => Math.random() * 400 - 200