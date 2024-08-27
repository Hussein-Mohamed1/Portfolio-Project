"use strict";
// click in nav par links functionality
let navlinks = document.querySelectorAll(".header-links li");
navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    let cursection = document.querySelector(".active");
    let sectiontoshow = document.querySelector(
      `.${e.target.getAttribute("name")}`
    );
    console.log(sectiontoshow);
    console.log(e);
    if (cursection)
      // can be removed later
      cursection.classList.remove("active");
    if (sectiontoshow)
      // can be removed later
      sectiontoshow.classList.add("active");
  });
});

/* declaring variables of main page */
const headerName = document.querySelector("header h1");
const headerP = document.querySelector("header .info p");
const popUp = document.querySelector(".pop-up");
const closeBtn = document.querySelector(".pop-up .close-pop-up");
const contact = document.querySelector("header .contact");
const contactPop = document.querySelector(".contact-card");

const displayContact = function () {
  contactPop.classList.remove("hidden");
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

const frontSkills = document.querySelector(".skills li:nth-child(2)");
const backSkills = document.querySelector(
  ".skills > div > ul > li:nth-child(3)"
);
const html = document.querySelector(".skills li:nth-child(2) li:nth-child(1)");
const css = document.querySelector(".skills li:nth-child(2) li:nth-child(2)");
const js = document.querySelector(".skills li:nth-child(2) li:nth-child(3)");

const node = document.querySelector(".skills li:nth-child(3) li:nth-child(1)");
const express = document.querySelector(
  ".skills li:nth-child(3) li:nth-child(2)"
);

frontSkills.addEventListener("click", function () {
  html.classList.toggle("hidden");
  css.classList.toggle("hidden");
  js.classList.toggle("hidden");
});
console.log(backSkills);
backSkills.addEventListener("click", function () {
  node.classList.toggle("hidden");
  express.classList.toggle("hidden");
});
