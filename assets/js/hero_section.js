const btn_id = document.getElementById("navbarDropdown");
const mega_menu = document.querySelector(".mega_menu");

btn_id.addEventListener("click", () => {
    if (mega_menu.style.display === "block") {
        mega_menu.style.display = "none";
    } else {
        mega_menu.style.display = "block";
    }
});


