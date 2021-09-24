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

let moveToLeftOrRightValue = 0;
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
    let position = moveToLeftOrRightValue + window.screen.availWidth;
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
    let position = moveToLeftOrRightValue + window.screen.availWidth;
    if (moveToLeftOrRightValue <= 0 && !btnToLeft["disabled"])
        btnToLeft["disabled"] = true;
    else if (moveToLeftOrRightValue > 0 && btnToLeft["disabled"])
        btnToLeft["disabled"] = false;
    if((articles.scrollWidth - moveToLeftOrRightValue > bodySize) && btnToRight["disabled"])
        btnToRight["disabled"] = false;
    else if((articles.scrollWidth - moveToLeftOrRightValue < bodySize) && !btnToRight["disabled"])
        btnToRight["disabled"] = true;

    if (articles.scrollWidth < bodySize){
        btnToLeft.classList.add("btnMove__hidden");
        btnToRight.classList.add("btnMove__hidden");
        console.log("Ocultando");
    } else {
        btnToLeft.classList.remove("btnMove__hidden");
        btnToRight.classList.remove("btnMove__hidden");
        console.log("Mostrando");
    }
}

window.onload = function(){
    enableDisableButtons();
};
window.onresize = function(){
    bodySize = document.body.clientWidth;
    enableDisableButtons();
};