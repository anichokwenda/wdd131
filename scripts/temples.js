document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Add event listener to navigation menu items
document.querySelectorAll('nav a').forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        // Add logic to handle menu item clicks
    });
});

// Hamburger menu functionality
const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
        hamburgerBtn.textContent = navMenu.classList.contains("show-menu") ? "X" : "☰";
    });
}
