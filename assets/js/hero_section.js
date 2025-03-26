const btn_id = document.getElementById("navbarDropdown");
const mega_menu = document.querySelector(".mega_menu");

btn_id.addEventListener("mouseover", () => {
    mega_menu.style.display = "block";
});

btn_id.addEventListener("click", () => {
    mega_menu.style.display = "none";
});
