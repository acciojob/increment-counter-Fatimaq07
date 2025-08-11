//your JS code here. If requirlet counter = document.getElementById("counter");
    let incrementBtn = document.getElementById("incrementBtn");
    incrementBtn.addEventListener("click", function() {
      alert(counter.textContent);
      counter.textContent = parseInt(counter.textContent) + 1;
    });
