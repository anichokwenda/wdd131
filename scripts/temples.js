document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

document.querySelectorAll('nav a').forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
    });
});


const hamburgerBtn = document.querySelector(".hamburger-btn");
const navMenu = document.querySelector("nav ul");

hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
    });

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () =>{
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

function toggleMenu(){
    var navLinks= document.getElementById("nav-links");
    if (navLinks.style.display === "block"){
        navLinks.style.display = "none";
    } else{
        navLinks.style.display="block";
    }
}

function toggleMenu(){
    var menu = document.getElementById("menu");
    var button = document.querySelector(".menu-button");
    if (menu.style.display === "block"){
        menu.style.display = "none";
        button.classList.remove("open");
    } else{
        menu.style.display = "block";
        button.classList.add("open");
    }
}