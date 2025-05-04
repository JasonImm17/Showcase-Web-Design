const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector(".ul");
const closeBtn = document.querySelector(".close");

hamburger.addEventListener("click", function () {
  ul.classList.add("nav-active");
  this.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  this.style.display = "none";
  hamburger.style.display = "block";
  ul.classList.remove("nav-active");
});

const arrowUP = document.querySelector(".arrow-up");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    arrowUP.style.opacity = "1";
  } else {
    arrowUP.style.opacity = "0";
  }
});

arrowUP.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
