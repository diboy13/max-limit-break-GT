const RENDER_EVENT = "render-mlb";

function b1(x) {
  let total = 0;
  for (let i = 0; i < x; i++) {
    total += 10 + 2 * i;
  }
  return total;
}

function b2(x) {
  // Changed parameter name to x
  let total = 0;
  for (let i = 0; i < x; i++) {
    total += 50 + 10 * i;
  }
  return total;
}

const b3 = (x) => {
  let total = 0;
  for (let i = 0; i < x; i++) {
    total += 100 + 20 * i;
  }
  return total;
};

// Masukkan nilai setelah di submit
function handleInputB1(event) {
  event.preventDefault(); // Mencegah perilaku default
  const value = parseInt(document.getElementById("maxLimitBreakB1").value, 10); // Ubah event.target.value menjadi document.getElementById("inputB1").value
  if (!isNaN(value)) {
    // Pastikan nilai adalah angka
    resultB1.textContent = b1(value);
  }
}

function handleInputB2(event) {
  event.preventDefault(); // Mencegah perilaku default
  const value = parseInt(document.getElementById("maxLimitBreakB2").value, 10); // Ubah event.target.value menjadi document.getElementById("inputB2").value
  if (!isNaN(value)) {
    // Pastikan nilai adalah angka
    resultB2.textContent = b2(value);
  }
}

function handleInputB3(event) {
  event.preventDefault(); // Mencegah perilaku default
  const value = parseInt(document.getElementById("maxLimitBreakB3").value, 10); // Ubah event.target.value menjadi document.getElementById("inputB3").value
  if (!isNaN(value)) {
    // Pastikan nilai adalah angka
    resultB3.textContent = b3(value);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submitB1").addEventListener("click", handleInputB1);
  document.getElementById("submitB2").addEventListener("click", handleInputB2);
  document.getElementById("submitB3").addEventListener("click", handleInputB3);
});
