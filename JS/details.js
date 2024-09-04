"use strict";
/* declaring variables */
const pageTitle = document.querySelector("head title");
const date = document.querySelector(".date");
const h1 = document.querySelector("section > h1");
const mainParagraph = document.querySelector("section > div:nth-child(4) > p");
const firstImg = document.querySelector("#firstImg");
const secondImg = document.querySelector("#secondImg");

const handleIndex = function () {
  function getCard(e) {
    //get closest card to selected element
    const card = e.target.closest(".card");

    //DOM for card elements
    const cardDate = card.querySelector("p:last-of-type").innerHTML;
    const cardTitle = card.querySelector("h2").textContent;
    const cardParagraph = card.querySelector("p").textContent;
    const cardImg = card.querySelector(".card-img img").src;

    //saving card elements in local storage
    localStorage.setItem("cDate", cardDate);
    localStorage.setItem("cTitle", cardTitle);
    localStorage.setItem("cParagraph", cardParagraph);
    localStorage.setItem("imgsrc", cardImg);

    window.open("../details.html", "_blank");
  }

  //selecting elements that will be clickable
  const imgGroup = document.querySelectorAll(".card .card-img");
  const h2Group = document.querySelectorAll(".card h2");
  const iconGroup = document.querySelectorAll(".card .right");

  //adding eventListerners to them
  imgGroup.forEach((image) => image.addEventListener("click", getCard));
  h2Group.forEach((heading2) => heading2.addEventListener("click", getCard));
  iconGroup.forEach((icon) => icon.addEventListener("click", getCard));
};

const handleDetails = function () {
  date.innerHTML = localStorage.getItem("cDate");
  h1.textContent = localStorage.getItem("cTitle");
  pageTitle.textContent = localStorage.getItem("cTitle");
  mainParagraph.textContent = localStorage.getItem("cParagraph");
  firstImg.src = localStorage.getItem("imgsrc");
};

const currentPage = window.location.pathname;

if (currentPage.includes("index.html")) handleIndex();
if (currentPage.includes("details.html")) {
  document.addEventListener("DOMContentLoaded", handleDetails);
  // handel large paragraph in some images

  mainParagraph.addEventListener('click', () => {
    if (mainParagraph.style.display === 'block') {
      mainParagraph.style.display = '-webkit-box';
    } else {
      mainParagraph.style.display = 'block';
    }
  })

  let link = document.createElement('link');


  link.rel = 'icon';
  link.href = localStorage.getItem("imgsrc");

  document.head.appendChild(link);
}


