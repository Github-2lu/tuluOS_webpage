
function toggleMenu() {
    const toggleIcon = document.querySelector(".toggle");
    const navLinks = document.querySelector(".navLinks");
    toggleIcon.classList.toggle("active");
    navLinks.classList.toggle("active");
}


document.querySelector(".toggle").addEventListener("click", toggleMenu);
const navLinks = document.querySelectorAll(".navLinks a");

navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", toggleMenu);
})

