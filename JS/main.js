// click in nav par links functionality
let navlinks = document.querySelectorAll(".header-links li");
navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    let cursection = document.querySelector(".active");
    let sectiontoshow = document.querySelector(
      `.${e.target.getAttribute("name")}`
    );
    if (cursection)
      // can be removed later
      cursection.classList.remove("active");
    if (sectiontoshow)
      // can be removed later
      sectiontoshow.classList.add("active");
  });
});

const headerName = document.querySelector("header h1");
const headerP = document.querySelector("header .info p");
const popUp = document.querySelector(".pop-up");
const closeBtn = document.querySelector(".pop-up .close-pop-up");
const contact = document.querySelector("header .contact");
const contactPop = document.querySelector(".contact-card");
const displayContact = function () {
  contactPop.classList.remove("hidden");
  console.log("heeeehhhhh");
};
const closeContact = document.querySelector(".contact-card .close-pop-up");

const displayPopUp = function () {
  popUp.classList.remove("hidden");
};

headerName.addEventListener("click", displayPopUp);
headerP.addEventListener("click", displayPopUp);
closeBtn.addEventListener("click", function () {
  popUp.classList.add("hidden");
});
contact.addEventListener("click", displayContact);

closeContact.addEventListener("click", function () {
  contactPop.classList.add("hidden");
});
