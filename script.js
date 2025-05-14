let sliderImages = document.querySelectorAll(".slide");
let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");
let current = 0;

function reset() {
    sliderImages.forEach(slide => {
        slide.style.display = "none";
    });
}


function startSlide() {
    reset();
    sliderImages[current].style.display = "block";
}


function slideLeft() {
    reset();
    current = (current === 0) ? sliderImages.length - 1 : current - 1;
    sliderImages[current].style.display = "block";
}


function slideRight() {
    reset();
    current = (current === sliderImages.length - 1) ? 0 : current + 1;
    sliderImages[current].style.display = "block";
}


arrowLeft.addEventListener("click", slideLeft);
arrowRight.addEventListener("click", slideRight);


startSlide();
