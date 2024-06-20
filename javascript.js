function openNav() {
    const mbMenu = document.querySelectorAll(".mobile-menu-container");
    const mbcon = mbMenu[0].getElementsByClassName("mobile-menu-wrap")
    const bodyOver = document.body
    mbMenu[0].style.height = "100%";
    mbcon[0].style.display = "flex"
    bodyOver.style.overflowY = "hidden"
}

function closeNav() {
    const mbMenu = document.querySelectorAll(".mobile-menu-container");
    const mbcon = mbMenu[0].getElementsByClassName("mobile-menu-wrap")
    const bodyOver = document.body
    mbMenu[0].style.height = "0%";
    mbcon[0].style.display = "none"
    bodyOver.style.overflowY = "auto"
}

window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    const navBar = document.querySelectorAll("nav")

    if (document.documentElement.scrollTop > 70) {
        navBar[0].className = "nav-scroll"
    } else {
        navBar[0].className = ""
    }

    
}
