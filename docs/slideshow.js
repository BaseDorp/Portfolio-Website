/*
    derived from https://www.w3schools.com/howto/howto_js_slideshow.asp
*/

let slideIndex = 1;
changeSlide(slideIndex);

function changeSlide(n) {
    slideIndex += n;
    let slides = document.querySelectorAll(".slide");

    // loops the slideshow back around
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    for (let s of slides) {
        s.style.display = "none"; // pretty sure we dont need this either since its set to none in the css
    }

    slides[slideIndex - 1].style.display = "block";
}