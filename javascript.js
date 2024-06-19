function openNav() {
    const mbMenu = document.querySelectorAll(".mobile-menu-container");
    const mbcon = mbMenu[0].getElementsByClassName("mobile-menu-wrap")
    mbMenu[0].style.height = "100%";
    mbcon[0].style.display = "flex"
}

function closeNav() {
    const mbMenu = document.querySelectorAll(".mobile-menu-container");
    const mbcon = mbMenu[0].getElementsByClassName("mobile-menu-wrap")
    mbMenu[0].style.height = "0%";
    mbcon[0].style.display = "none"
}