const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeButton = document.querySelector("#close-btn");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const fullImage = item.src.replace("-thumbnail", "");
    lightboxImage.src = fullImage;
    lightbox.style.display = "flex";
  });
});

closeButton.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
});
