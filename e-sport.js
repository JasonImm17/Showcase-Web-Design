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


const movingImages = document.querySelector(".image-content");
const change = document.querySelectorAll(".changeButton");
const content = document.querySelectorAll(".content");
let number;
AOS.init();

for (let i = 0; i < change.length; i++) {
    change[i].addEventListener("click", function (){
        number = i + 1;
        movingImages.style.opacity = "0";
        setTimeout(() => {
          movingImages.style.opacity = "1";
          movingImages.setAttribute("src", `images/${number}.jpg`);
          changeContent.style.opacity = "1";
          changeContent.classList.remove("content-active");
          content[i].classList.add("content-active");
          AOS.init();
        }, 400);
        
        let changeActive = document.querySelector(".changeButton-active");
        changeActive.classList.remove("changeButton-active");
        this.classList.add("changeButton-active");
        
        let changeContent = document.querySelector(".content-active");
        changeContent.style.opacity = "0";
        
    });
}

