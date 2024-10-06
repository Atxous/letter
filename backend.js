document.addEventListener("DOMContentLoaded", function() {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");
  
    // Handle envelope click
    envelope.addEventListener("click", function() {
      envelope.classList.add("open");
      letter.classList.add("show-letter");
    });
  });
  