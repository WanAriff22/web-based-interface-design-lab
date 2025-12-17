let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
showSlides();
let progress = 0;
const bar = document.getElementById("progressBar");
const interval = setInterval(() => {
if (progress >= 100) {
clearInterval(interval);
} else {
progress++;
bar.style.width = progress + "%";
bar.innerHTML = progress + "%";
}
}, 40);
const coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    const content = this.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
}