let counter = document.getElementById('counter');
let incrementBtn = document.getElementById('incrementBtn');
let count = 0;

incrementBtn.addEventListener('click', () => {
  alert(count);  // Show un-incremented value
  count++;       // Increment counter
  counter.textContent = count; // Update display
});
