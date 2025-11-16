// Toy car object
const toyCar = {
  name: "Classic Speedster",
  color: "Red",
  price: 24.99
};

// DOM elements
const priceEl = document.getElementById("price");
const colorEl = document.getElementById("colorDisplay");
const statusEl = document.getElementById("status");

// Update the text on the page
function updateDisplay() {
  priceEl.textContent = toyCar.price.toFixed(2);
  colorEl.textContent = toyCar.color;

  // simple color logic
  if (toyCar.color === "Red") colorEl.style.background = "red";
  else if (toyCar.color === "Blue") colorEl.style.background = "blue";
  else if (toyCar.color === "Green") colorEl.style.background = "green";
}