// Select all <a> elements
const links = document.querySelectorAll("a");

// Loop through each link
links.forEach((link) => {
  // Check if the text content is "Home"
  if (link.textContent.trim() === "Home") {
    // Hide the link by setting display to none
    link.style.display = "none";
  }
});
