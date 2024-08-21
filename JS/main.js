// click in nav par links functionality
let navlinks = document.querySelectorAll(".header-links li");
navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    let cursection = document.querySelector(".active");
    console.log(e.target);
    let sectiontoshow = document.querySelector(
      `.${e.target.getAttribute("name")}`
    );
    cursection.classList.remove("active");
    sectiontoshow.classList.add("active");
  });
});

const headerName = document.querySelector("header h1");
const headerP = document.querySelector("header .info p");
const popUp = document.querySelector(".pop-up");
const closeBtn = document.querySelector(".pop-up .close-pop-up");

const displayPopUp = function () {
  popUp.classList.remove("hidden");
};

headerName.addEventListener("click", displayPopUp);
headerP.addEventListener("click", displayPopUp);
closeBtn.addEventListener("click", function () {
  popUp.classList.add("hidden");
});
