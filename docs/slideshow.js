/*
    Received help from colleague Jethro Schoppenhorst
    https://github.com/JSchoppe
*/

document.querySelectorAll(".slideshow").forEach((slideshow)=>{

    // Encapsulate state (this is unique for each slideshow).
    let slideIndex = 0;
    const slides = slideshow.querySelectorAll(".slide");

    // Define behaviour when clicking.
    const IncrementSlideIndex = (n) => {
        // Update slide index and wrap.
        slideIndex += n;
        if (slideIndex > slides.length)
            slideIndex = 1;
        if (slideIndex < 1)
            slideIndex = slides.length;
        // Update styling.
        for (let s of slides) {
            // sets all slides to not visible
            s.style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    };

    if (slides.length > 1) {
    IncrementSlideIndex(1); // This automatically sets the first slide
    // Bind click actions.
    slideshow.querySelector(".prev").addEventListener("click", () => { IncrementSlideIndex(-1); });
    slideshow.querySelector(".next").addEventListener("click", () => { IncrementSlideIndex(1); });
    }
});