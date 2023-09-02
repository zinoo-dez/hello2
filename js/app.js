let bars = document.querySelector("#bars");
let navLinks = document.querySelector(".nav-links");
bars.addEventListener("click", function () {
  // alert("hello");
  navLinks.classList.toggle("show");
});
window.addEventListener("scroll", function () {
  navLinks.classList.remove("show");
});
