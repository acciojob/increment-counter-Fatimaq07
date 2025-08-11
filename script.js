let counterElement = document.getElementById("counter");
let incrementBtn = document.getElementById("incrementBtn");
incrementBtn.addEventListener("click", function() {
    alert(counterElement.textContent);
    counterElement.textContent = parseInt(counterElement.textContent) + 1;
});
