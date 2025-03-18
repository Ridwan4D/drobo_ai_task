let menuList = document.getElementById('menu_list');

// menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight === "0px" || menuList.style.maxHeight === "") {
        menuList.style.maxHeight = "300px"
        menuList.style.padding = "20px 0"
    } else {
        menuList.style.maxHeight = "0px"
        menuList.style.padding = "0"
    }
}