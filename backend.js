document.addEventListener("DOMContentLoaded", function() {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");
    const nextPageButton = document.getElementById("nextPage");
  
    // Handle envelope click to open
    envelope.addEventListener("click", function() {
      envelope.classList.add("open");
      letter.classList.add("show-letter");
    });
  
    // Handle "Next Page" button click to navigate
    nextPageButton.addEventListener("click", function() {
      window.location.href = "nextpage.html"; // Navigate to the next page
    });
  });
  