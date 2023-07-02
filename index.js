"use strict"


const images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg", "images/9.jpg"];
let currentIndex = 0;

const imageElement = document.querySelector(".image");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

prevButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);

function showPreviousImage() {
    currentIndex--;
    imageElement.src = images[currentIndex];
    nextButton.hidden = false;

    if (currentIndex === 0) {
        prevButton.hidden = true;
    }
}

function showNextImage() {
    currentIndex++;
    imageElement.src = images[currentIndex];
    prevButton.hidden = false;

    if (currentIndex === images.length - 1) {
        nextButton.hidden = true;
    }
}
