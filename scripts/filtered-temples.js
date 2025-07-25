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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-8213-thumb.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-45008.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-5154.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 25",
    area: 19184,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22456.jpg"
  },
  {
    templeName: "Melborne Australia",
    location: "Melborne, Australia",
    dedicated: "2000, June, 16",
    area: 10700,
    imageUrl:
    "https://churchofjesuschhttps://churchofjesuschristtemples.org/assets/img/temples/melbourne-australia-temple/melbourne-australia-temple-58608.jpg"
  },

];

const templesContainer = document.getElementById('temples-container');

function displayTemples(templesToDisplay) {
  templesContainer.innerHTML = '';
  templesToDisplay.forEach(temple => {
    const templeHTML = `
      <div class="temple">
        <h2>${temple.name}</h2>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area} sq ft</p>
      </div>
    `;
    templesContainer.insertAdjacentHTML('beforeend', templeHTML);
  });
}

// Add event listeners to the navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  console.log('Link clicked:', link.textContent);
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const linkText = link.textContent;
    let filteredTemples;

    switch (linkText) {
      case 'Home':
        filteredTemples = temples;
        break;
      case 'Old':
        filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
        break;
      case 'New':
        filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
        break;
      case 'Large':
        filteredTemples = temples.filter(temple => temple.area > 90000);
        break;
      case 'Small':
        filteredTemples = temples.filter(temple => temple.area < 10000);
        break;
      default:
        filteredTemples = temples;
    }

    displayTemples(filteredTemples);
  });
});

// Display all temples initially
displayTemples(temples);
