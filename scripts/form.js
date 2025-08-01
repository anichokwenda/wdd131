const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const productNameSelect = document.getElementById("product-name");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productNameSelect.appendChild(option);
});

if (document.title === "Review Confirmation") {
  let reviewCount = localStorage.getItem("reviewCount");
  if (reviewCount === null) {
    reviewCount = 0;
  } else {
    reviewCount = parseInt(reviewCount);
  }
  reviewCount++;
  localStorage.setItem("reviewCount", reviewCount);
  document.getElementById("review-count").textContent = reviewCount;
}

document.getElementById("product-review-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const reviewCount = localStorage.getItem('reviewCount') ? parseInt(localStorage.getItem('reviewCount')) + 1 : 1;
  localStorage.setItem('reviewCount', reviewCount);
  document.getElementById('review-count').textContent = reviewCount;
  document.getElementById("product-review-form").requestFullscreen();
  document.getElementById("product-review-form").style.display= "none";
  document.getElementById("review-confirmation").style.display = "block";
});

