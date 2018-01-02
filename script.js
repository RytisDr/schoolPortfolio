let iAm = document.getElementById("IAm");
let aboutMe = document.getElementById("about");
let footer = document.querySelector("footer");
let backArrow = document.querySelectorAll(".backArrow");
let themes = document.getElementById("themes");
let theme1Page = document.getElementById("theme1");
let iDid = document.getElementById("IDid");
let theme1 = document.getElementById("one");
let theme2 = document.getElementById("two");
let theme3 = document.getElementById("three");
let theme4 = document.getElementById("four");
let flatDesign = document.getElementById("flatDesign");


iAm.addEventListener('click', slide);

function slide() {
    aboutMe.classList.add("transition");
    footer.style.color = "black";
}
backArrow[0].addEventListener('click', back);
backArrow[1].addEventListener('click', back);

function back() {
    aboutMe.classList.replace("transition", "goBack");
    footer.style.color = "white";
    themes.classList.replace("transition", "goBack");
    aboutMe.addEventListener("animationend", removal);
    themes.addEventListener("animationend", removal);

    function removal() {
        aboutMe.classList.remove("goBack");
        themes.classList.remove("goBack");
    }
}

iDid.addEventListener('click', slide2);

function slide2() {
    themes.classList.add("transition");
}
theme1.addEventListener('click', open1);

function open1() {
    let back = document.getElementById("backFromTheme1");
    flatDesign.addEventListener('click', function (url) {
        window.open("http://rtsdr.com/kea/web/responsive/");
    })
    theme1Page.classList.add("transition");
    back.addEventListener('click', function () {
        theme1Page.classList.replace("transition", "goBack");
        theme1Page.addEventListener('animationend', function () {
            theme1Page.classList.remove("goBack");
        })
    })
}
