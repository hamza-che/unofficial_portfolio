// Set Variables
const menuBtn = document.querySelector(".menu-btn");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const menuItems = document.querySelectorAll(".nav-item");

// set menu state
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {

    if (!showMenu) {
        menuBtn.classList.add("close");
        menuBranding.classList.add("show");
        menuNav.classList.add("show");
        menuItems.forEach(item => {
            item.classList.add("show")
        });

        // Set the menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menuBranding.classList.remove("show");
        menuNav.classList.remove("show");
        menuItems.forEach(item => {
            item.classList.remove("show")
        });

        // Set the menu state
        showMenu = false;
    }
}