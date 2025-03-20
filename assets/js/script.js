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



document.querySelectorAll('.accordion_item').forEach(item => {
    const collapseElement = item.querySelector('.accordion-collapse');

    collapseElement.addEventListener('show.bs.collapse', function () {
        item.style.background = "#F5F5F6";
    });

    collapseElement.addEventListener('hide.bs.collapse', function () {
        item.style.background = "transparent";
    });
});

document.querySelectorAll('.accordion-collapse').forEach(collapseElement => {
    const header = collapseElement.previousElementSibling.querySelector('.accordion_header');

    collapseElement.addEventListener('show.bs.collapse', function () {
        header.style.background = "#AE6CE1";
        header.style.color = "#FFFFFF";
    });
    
    collapseElement.addEventListener('hide.bs.collapse', function () {
        header.style.background = "#F0E7F9";
        header.style.color = "#69507D";
    });
});
