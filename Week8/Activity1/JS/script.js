const gallery = document.getElementById("gallery");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");
let scrollAmount = 320;

// Scroll buttons
nextButton.addEventListener("click", () => {
    gallery.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

prevButton.addEventListener("click", () => {
    gallery.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

// Clickable images to open in lightbox
document.querySelectorAll(".image-item img").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
});

// Close lightbox when clicking outside the image or on the close button
lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});
