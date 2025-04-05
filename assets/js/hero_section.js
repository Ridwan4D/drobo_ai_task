const btn_id = document.getElementById("navbarDropdown");
const mega_menu = document.querySelector(".mega_menu");

// Show the menu on mouseover
btn_id.addEventListener("mouseover", () => {
    mega_menu.style.display = "block";
});

// Hide the menu when mouse leaves both the button and the mega menu
let timeout;

const hideMenu = () => {
    timeout = setTimeout(() => {
        mega_menu.style.display = "none";
    }, 200); // Optional delay for smoother UX
};

const cancelHide = () => {
    clearTimeout(timeout);
};

btn_id.addEventListener("mouseleave", hideMenu);
mega_menu.addEventListener("mouseleave", hideMenu);

// Cancel hiding if mouse enters again quickly
btn_id.addEventListener("mouseenter", cancelHide);
mega_menu.addEventListener("mouseenter", cancelHide);
