/*
    derived from https://www.w3schools.com/howto/howto_js_slideshow.asp
*/

// get all slideshows
let slideshows = document.querySelectorAll(".slideshow");
// go through each slideshow and see which slide is active


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
        // sets all slides to not visible
        s.style.display = "none"; 
    }

    // set current slide to visible
    slides[slideIndex - 1].style.display = "block";
}

// TODO make next/prev arrows and caption snap to slide depending on size