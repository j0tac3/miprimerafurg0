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

const mainImage = document.getElementById("image_slider");
