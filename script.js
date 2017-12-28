let iAm = document.getElementById("IAm");
let aboutMe = document.getElementById("about");
let footer = document.querySelector("footer");
let backArrow = document.getElementById("backArrow");

iAm.addEventListener('click', slide);
function slide(){
    aboutMe.classList.add("transition");
    footer.style.color = "black";
}
backArrow.addEventListener('click', back)
function back(){
    aboutMe.classList.remove("transition");
    aboutMe.classList.add("goBack");
    footer.style.color = "white";
    aboutMe.addEventListener("animationend", function(){
        aboutMe.classList.remove("goBack");
    })
    }

