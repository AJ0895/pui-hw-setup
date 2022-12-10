
//-----------JS for Video Slider-active-----------//
const btns= document.querySelectorAll(".nav-btn");
const slides= document.querySelectorAll(".video-slider");

var sliderNav= function(manual) {
    btns.forEach((btn)=> {
        btn.classList.remove("active");

    })

    slides.forEach((slide)=> {
        slide.classList.remove("active");

    })

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
}


btns.forEach((btn,i)=>{
    btn.addEventListener("click",() =>{
        sliderNav(i);
    })
})



//----------------Template for each dog page---------------//
console.log(pups);
console.log(pups["Bruno"]);

const queryString=window.location.search;
const params= new URLSearchParams(queryString);
const dog= params.get("pups");

document.querySelector(".pupNam").textContent=dog;

document.querySelector(".dogName").textContent=dog;

document.querySelector(".profImage").src="./" +pups[dog].imgFile;

console.log(pups[dog].dbreed);
document.querySelector(".breed").textContent=pups[dog].dBreed;

document.querySelector(".des").textContent=pups[dog].des;

document.querySelector(".stor").textContent=pups[dog].story;

console.log("entered");



