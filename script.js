let iAm = document.getElementById("IAm");
let aboutMe = document.getElementById("about");
let footer = document.querySelector("footer");
let backArrow = document.querySelectorAll(".backArrow");
let themes = document.getElementById("themes");
let iDid = document.getElementById("IDid");

iAm.addEventListener('click', slide);
function slide(){
    aboutMe.classList.add("transition");
    footer.style.color = "black";
}
backArrow[0].addEventListener('click', back);
backArrow[1].addEventListener('click', back);
function back(){
    aboutMe.classList.replace("transition", "goBack");
    footer.style.color = "white";
    themes.classList.replace("transition", "goBack");
    aboutMe.addEventListener("animationend", removal);
    themes.addEventListener("animationend", removal);
    function removal(){
        aboutMe.classList.remove("goBack");
        themes.classList.remove("goBack");
    }}

iDid.addEventListener('click', slide2);
function slide2(){
    themes.classList.add("transition");
}
