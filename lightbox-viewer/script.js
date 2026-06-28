// Create a variable named galleryItems and store all the HTML elements that have the class gallery-item
const galleryItems = document.querySelectorAll(".gallery-item");
// Create a variable named lightbox and store the HTML elements that have the class lightbox
const lightbox = document.querySelector(".lightbox");
// Create a variable named lightboxImage and store the image inside the lightbox
const lightboxImage = document.querySelector("#lightbox-image");
// Create a variable named closeButton and store the close button
const closeButton = document.querySelector("#close-btn");

// Go through every thumbnail image one by one. During each loop, call the current thumbnail item
galleryItems.forEach((item) => {
  // Listen for a click on this thumbnail. When someone clicks it, run the code inside it
  item.addEventListener("click", () => {
    // Take the clicked image's URL, remove the -thumbnail from it, and save the new URL into a variable called fullImage
    const fullImage = item.src.replace("-thumbnail", "");
    // Change the image inside the lightbox so it displays the full-size image
    lightboxImage.src = fullImage;
    // Show the lightbox by changing its CSS display property to "flex"
    lightbox.style.display = "flex";
  });
});

// Listen for a click on the close button. When it's clicked run the following code
closeButton.addEventListener("click", () => {
  // Hide the lightbox by changing its CSS display property to "none"
  lightbox.style.display = "none";
});

// Listen for a click anywhere inside the lightbox, and provide information about the click in the event object
lightbox.addEventListener("click", (event) => {
  // If the user clicked the lightbox background itself, then run the code below
  if (event.target === lightbox) {
    // Hide the lightbox by changing its CSS display property to "none"
    lightbox.style.display = "none";
  }
});
