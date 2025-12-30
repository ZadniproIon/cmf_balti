function toggleMenu() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".mobile-menu");
    const body = document.body;

    hamburger.classList.toggle("open");
    menu.classList.toggle("menu-open");
    body.classList.toggle("menu-lock");
}


// Automatically close the menu on screen resize
window.addEventListener("resize", () => {
    const menu = document.querySelector(".mobile-menu");
    const body = document.body;

    // Check if the screen width is greater than 1100px
    if (window.innerWidth > 1100) {
        // Close the mobile menu if it's open
        if (menu.classList.contains("menu-open")) {
            toggleMenu();
        }
    }
});
