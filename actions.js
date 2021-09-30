const menuIcon = document.getElementById("menu_icon");
menuIcon.addEventListener("click", showHiddenLateralMenu);
const lateralMenuArea = document.getElementById("lateral_menu_area");
lateralMenuArea.addEventListener("click", showHiddenLateralMenu);
const lateralMenu = document.getElementById("lateral_menu");

function showHiddenLateralMenu(event){
    lateralMenuArea.classList.toggle("menu__lateral-area__visible");
    let lateralMenu = document.getElementById("lateral_menu");
    lateralMenu.classList.toggle("menu__lateral-visible");
    console.log(event.target);
}


const btnToUp = document.getElementById("btnToUp");
btnToUp.addEventListener("click", pageToTop);
function pageToTop(){
    scroll({
        top: 0,
        behavior: "smooth"
    });
    document.activeElement.blur();
}
window.onscroll = function(){ onScroll() };
function onScroll(event){
    let currentPosition = document.documentElement.scrollTop;
    if (currentPosition > 300){
        btnToUp.classList.add("toUp_visible");
    } else {
        btnToUp.classList.remove("toUp_visible");
    }
}

let moveToLeftOrRightValue = -1;
let bodySize = document.body.clientWidth;
const articles = document.getElementById("articles");
const btnToLeft = document.getElementById("btnToLeft");
const btnToRight = document.getElementById("btnToRight");
btnToLeft.addEventListener("click", addToLeftValue);
btnToRight.addEventListener("click", addToRightValue);
function addToLeftValue(){
    if (moveToLeftOrRightValue > 0){
        moveToLeftOrRightValue = articles.scrollLeft - 200;
        moveToSide();
    }
}
function addToRightValue(){
    if (moveToLeftOrRightValue + bodySize < articles.scrollWidth){
        moveToLeftOrRightValue = articles.scrollLeft + 200;
        moveToSide();
    }
}
function moveToSide(){
    articles.scrollTo({
        left: moveToLeftOrRightValue,
        behavior: "smooth"
    });
    enableDisableButtons();
}
function enableDisableButtons(){
    if (moveToLeftOrRightValue <= 0 && !btnToLeft["disabled"])
        disableEnableButtonLeft(false);
    else if (moveToLeftOrRightValue > 0 && btnToLeft["disabled"])
        disableEnableButtonLeft(true);
    if((articles.scrollWidth - moveToLeftOrRightValue > bodySize) && btnToRight["disabled"])
        disableEnableButtonRight(true);
    else if((articles.scrollWidth - moveToLeftOrRightValue <= bodySize) && !btnToRight["disabled"])
        disableEnableButtonRight(false);
}

function disableEnableButtonLeft(enable){
    if (enable){
        btnToLeft["disabled"] = false
        btnToLeft.classList.remove("btnToLeft__hidden");
    } else {
        btnToLeft["disabled"] = true
        btnToLeft.classList.add("btnToLeft__hidden");
    }
}
function disableEnableButtonRight(enable){
    if (enable){
        btnToRight["disabled"] = false
        btnToRight.classList.remove("btnToRight__hidden");
    } else {
        btnToRight["disabled"] = true
        btnToRight.classList.add("btnToRight__hidden");
    }
}

function resizeChech(){
    let bodySize = document.body.clientWidth;
    if (articles.scrollWidth < bodySize){
        moveToLeftOrRightValue = 0
        btnToRight["disabled"] = false;
        btnToLeft["disabled"] = false;
        btnToLeft.classList.add("btnToLeft__hidden");
        btnToRight.classList.add("btnToRight__hidden");
    } else {
        btnToRight["disabled"] = false;
        btnToLeft["disabled"] = true;
        btnToLeft.classList.add("btnToLeft__hidden");
        btnToRight.classList.remove("btnToRight__hidden");
    }
}

window.onload = function(){
    resizeChech();
};
window.onresize = function(){
    resizeChech();
};