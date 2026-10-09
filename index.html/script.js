document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const themeBtn = document.getElementById("theme-btn");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                themeBtn.textContent = "☀️";
            } else {
                themeBtn.textContent = "🌙";
            }
        });
    }

    if (navLinks) {
        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
            });
        });
    }
});
