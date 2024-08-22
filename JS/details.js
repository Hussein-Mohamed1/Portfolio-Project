"use strict";
/* declaring variables */
const pageTitle = document.querySelector("head title");
console.log(pageTitle.textContent);
const date = document.querySelector(
  "body > section > div.paragraph > p:nth-child(1)"
);
const articleTitle = document.querySelector(
  "section > div.paragraph > p:nth-child(2)"
);
const h1 = document.querySelector("section > h1");
const mainParagraph = document.querySelector("section > div:nth-child(4) > p");
const firstImg = document.querySelector("#firstImg");
const secondImg = document.querySelector("#secondImg");

/* let motherLove;
$.get("../html/index.html", null, function (text) {
  motherLove = $(text).find(
    "div.Highlights.active > div:nth-child(1) > div:nth-child(2) > div > img"
  );
  console.log(motherLove);
}); */

// $.get("../html/index.html", null, function (text) {
//   // Create a jQuery object with the fetched HTML content
//   var $htmlContent = $(text);

//   // Find the <img> elements in the fetched HTML
//   var $imgElements = $htmlContent.find("body");

//   // Add an event listener to the <img> elements
//   $imgElements.on("click", function () {
//     alert("An image was clicked!");
//   });

//   // If you want to append these images to an existing element on the page
//   // For example, appending to a container with id="imageContainer"
//   // $("#imageContainer").append($imgElements);
// });
/* may be working
$.get("../html/index.html", null, function (text) {
  // Log the fetched HTML content to verify it's being retrieved correctly
  console.log("Fetched HTML content:", text);

  // Create a jQuery object with the fetched HTML content
  var $htmlContent = $(text);

  // Find the <img> elements in the fetched HTML
  var $imgElements = $htmlContent.find("img");

  // Log the found <img> elements to verify they are being selected
  console.log("Found <img> elements:", $imgElements);

  // Check if any <img> elements were found
  if ($imgElements.length > 0) {
    // Add an event listener to the <img> elements
    $imgElements.on("click", function () {
      alert("An image was clicked!");
    });

    // Optionally append these images to an existing element in the DOM
    // Example: appending to a container with id="imageContainer"
    // $("#imageContainer").append($imgElements);
  } else {
    console.warn("No <img> elements found in the fetched content.");
  }
}).fail(function (jqXHR, textStatus, errorThrown) {
  // Log any errors with the AJAX request
  console.error("AJAX request failed:", textStatus, errorThrown);
}); */

/* Articles selectors */
// const mothersLove = do.querySelector(
//   "body > div.Highlights.active > div:nth-child(1) > div:nth-child(2) > div > img"
// );
/* 
mothersLove.addEventListener("click", function () {
  console.log(date);
  date.textContent = "November 01, 2023";
  articleTitle.textContent = "PDF at The Australian Women's Weekly";
}); */
/* 
const test = document.querySelector(".main > div.paragraph > p:nth-child(1)");
test.textContent = "hello there";
 */
