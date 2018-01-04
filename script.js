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
let kilkee = document.getElementById("Kilkee");


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
    let presentation=document.getElementById("kilkeePresentation").addEventListener('click', function(){
        window.open('files/Presentation.pdf');
    });
    flatDesign.addEventListener('click', function (url) {
        window.open("http://rtsdr.com/kea/web/responsive/");
    })
    kilkee.addEventListener('click', function(){
        window.open("http://rtsdr.com/kea/web/01.05_group-web-redesign/");
    })
    theme1Page.classList.add("transition");
    theme1Page.style.overflow="scroll";
    back.addEventListener('click', function () {
        theme1Page.classList.replace("transition", "goBack");
        theme1Page.addEventListener('animationend', function () {
            theme1Page.classList.remove("goBack");
        })
    })
}
theme2.addEventListener('click', function(){
    let back = document.getElementById("backFromTheme2");
    let theme2Page = document.getElementById("theme2");
    theme2Page.classList.add("transition");
    back.addEventListener('click', function(){
         theme2Page.classList.replace("transition", "goBack");
        theme2Page.addEventListener('animationend', function () {
            theme2Page.classList.remove("goBack");
        })
    })
    let simpleAnimation = document.getElementById("firstJSAnimation");
    simpleAnimation.addEventListener('click', function(){
        window.open("http://rtsdr.com/kea/02-animation/basic-interactive-animation/");
    })
    let styleTile = document.getElementById("styleStoryImg");
    styleTile.addEventListener('click', function(){
        window.open("files/style-tile-and-story_rytis-drazdauskas.pdf");
    })
    let storyBoardWork = document.getElementById("storyWorkImg");
    storyBoardWork.addEventListener('click', function(){
        window.open("files/storyboard-and-work-sheet_Rytis-Drazdauskas.pdf");
    })
    let spriteSheet = document.getElementById("spriteImg");
    spriteSheet.addEventListener('click', function(){
        window.open("http://rtsdr.com/kea/02-animation/sprite/");
    })
    let sushiTime = document.getElementById("interactiveAnimationImg");
    sushiTime.addEventListener('click', function(){
        window.open("http://rtsdr.com/kea/02-animation/02.03.02-interactive-animation/");
    })
    let PP1 = document.getElementById("PP1");
    PP1.addEventListener('click', function(){
        window.open("http://rtsdr.com/kea/02-animation/2.3.3-project-pool-1/");
    })
    let PP2 = document.getElementById("PP2");
    PP2.addEventListener('click', function(){
        window.open("http://rtsdr.com/kea/02-animation/2.3.4/");
    })
    let collage = document.getElementById("pCollage");
    collage.addEventListener('click', function(){
        window.open("images/PersonasCollage_(Group15).jpg");
    })
    let storyBoardGroup = document.getElementById("storyboard");
    storyBoardGroup.addEventListener('click', function(){
        window.open("images/storyboard_group15_full.jpg");
    })
    let summary = document.getElementById("summary");
    summary.addEventListener('click', function(){
        window.open("files/group-15_expert-test.pdf");
    })
})
