let iAm = document.getElementById("IAm");
let aboutMe = document.getElementById("about");
let footer = document.querySelector("footer");
let backArrow = document.querySelector(".backArrow");
let themes = document.getElementById("themes");
let iDid = document.getElementById("IDid");

iAm.addEventListener('click', slide);
function slide(){
    aboutMe.classList.add("transition");
    footer.style.color = "black";
    backArrow = "here";
}
backArrow.addEventListener('click', back)
function back(){
    if(backArrow == "here"){
    aboutMe.classList.remove("transition");
    aboutMe.classList.add("goBack");
    footer.style.color = "white";
    aboutMe.addEventListener("animationend", function(){
        aboutMe.classList.remove("goBack");
    })
    }else{
    themes.classList.remove("transition");
    themes.classList.add("goBack");
    themes.addEventListener("animationend", function(){
        themes.classList.remove("goBack");
    })
    }
}
iDid.addEventListener('click', slide2);
function slide2(){
    themes.classList.add("transition");
}
