let tl = gsap.timeline();
let t2 = gsap.timeline({paused:true, reversed:true});
let t3 = gsap.timeline({paused:true});

 tl.fromTo(".image-div", {opacity:0}, {opacity:1, duration:2})
.fromTo(".text-div", {opacity: 0}, {opacity: 1, duration: 4}, "-=1");

 t2.to(".text-div", {yPercent:-30 , duration:1})
.to(".explore-link", {opacity:0, duration:1}, "-=1.2")
.to(".detail:nth-child(1)", {opacity:1, duration:0.8})
.to(".detail:nth-child(2)", {opacity:1, duration:0.8}, "-=0.2")
.to(".detail:nth-child(3)", {opacity:1, duration:0.8}, "-=0.2");

const exploreLink = document.querySelector(".explore-link");
exploreLink.addEventListener("click", ()=>{
  t2.play();
});

t3.to(".image-div", {opacity:0, duration:1})
.to(".title", {opacity:0, duration:1}, "-=1")
.to(".detail:nth-child(2)", {opacity:0, duration:1}, "-=1")
.to(".detail:nth-child(3)", {opacity:0, duration:1}, "-=2")
.to(".detail:nth-child(1)", {opacity:0, duration:1}, "-=3")
.to(".detail:nth-child(2)", {xPercent:-100, duration:1})
.to(".detail:nth-child(3)", {xPercent:-100, duration:1})
.to(".detail:nth-child(1)", {xPercent:-100, duration:1})
.to(".about-div", {x:10}, "-=3");

const detail1 = document.querySelector(".detail:nth-child(1)").addEventListener("click", ()=>{
  t3.play();
});