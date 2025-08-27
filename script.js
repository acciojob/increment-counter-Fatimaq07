let counterElement = document.getElementById("counter");
let incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", function () {
  // Show alert with current value (un-incremented)
  alert(counterElement.textContent);

  // Increment and update display
  counterElement.textContent = parseInt(counterElement.textContent) + 1;
});
