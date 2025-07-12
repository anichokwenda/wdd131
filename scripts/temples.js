const currentYearElement =document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastModified");

if (currentYearElement && lastModifiedElement){
    currentYearElement.textContent= new Date().getFullYear();
    const lastModifiedDate = new Date(document.lastModified);
    const options = { year:'numeric', month:'2-digit', day: '2-digit', hour:'2-digit', minute: '2-digit', second:'2-digit'};
    lastModifiedElement.textContent = 'Last Modified: ${lastModifiedDate.toLocaleString(undefined, options)}';
} else{
    console.error("One or both elements not found");
}



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