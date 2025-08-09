document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const events = [
  { id: "fc-1888", name: "workshops", averagerating: 4.5 },
  { id: "fc-2050", name: "seminars", averagerating: 4.7 },
  { id: "fs-1987", name: "conferences", averagerating: 3.5 },
  { id: "ac-2000", name: "support groups", averagerating: 3.9 },
  { id: "jj-1969", name: "other", averagerating: 5.0 }
];

const eventNameSelect = document.getElementById("event-specification");
if(eventNameSelect){
  events.forEach(event => {
  const option = document.createElement("option");
  option.value = event.id;
  option.textContent = event.name;
  eventNameSelect.appendChild(option);
});
} else{
  console.error("Element with id 'event-specification' not found.");
}
       


if (document.title === "Registration") {
  let registrationCount = localStorage.getItem("registrationCount");
  if (registrationCount === null) {
    registrationCount = 0;
  } else {
    registrationCount = parseInt(registrationCount);
  }
  registrationCount++;
  localStorage.setItem("registrationCount", registrationCount);
  document.getElementById("registration-count").textContent = registrationCount;
}

document.getElementById("events-registration-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const registrationCount = localStorage.getItem('registrationCount') ? parseInt(localStorage.getItem('registrationCount')) + 1 : 1;
  localStorage.setItem('registrationCount', registrationCount);
  document.getElementById('registration-count').textContent = registrationCount;
  document.getElementById("events-registration-form").requestFullscreen();
  document.getElementById("events-registration-form").style.display= "none";
  document.getElementById("registration").style.display = "block";
});


const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () =>{
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

function toggleMenu(){
    document.getElementById("nav-links").classList.toggle("show-menu");
};

