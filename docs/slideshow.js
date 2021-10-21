/*
    derived from https://www.w3schools.com/howto/howto_js_slideshow.asp
*/

// get all slideshows
let slideshows = document.querySelectorAll(".slideshow");
// go through each slideshow and see which slide is active

const Slideshow = {
    index: 0,
    slides: null,

}

function nextSlide(slideshow) {
    let slides = slideshow.querySelectorAll(".slide");
    changeSlide(slideshow)


    slideshow.currentslide = slides[currentslide++];

    console.log(slideshow);
}

function prevSlide(div) {

}







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

    for (let ss of slideshows) {
        let slides = document.querySelectorAll(".slide");
        for (let s of slides) {
            // sets all slides to not visible
            s.style.display = "none";
        }
    }

    // set current slide to visible
    slides[slideIndex - 1].style.display = "block";
}




// TODO make next/prev arrows and caption snap to slide depending on size
// function onPageLoaded(){
//     document.querySelectorAll(".slideshow").forEach((slideshowDiv) => {
//         slideshowDiv.querySelectorAll(".slide");
//         // TODO
//     };
// }