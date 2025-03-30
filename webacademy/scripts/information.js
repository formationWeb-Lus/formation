document.getElementById("menu-toggle").addEventListener("click", function() {
    var navMenu = document.getElementById("nav-menu");
    if (navMenu.classList.contains("nav-hidden")) {
        navMenu.classList.remove("nav-hidden");
        navMenu.classList.add("nav-show");
    } else {
        navMenu.classList.remove("nav-show");
        navMenu.classList.add("nav-hidden");
    }
});
