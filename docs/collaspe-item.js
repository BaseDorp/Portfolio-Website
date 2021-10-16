/*
    Derived from https://www.w3schools.com/howto/howto_js_collapsible.asp
*/


// get all the drop down bars
let projects = document.querySelectorAll(".project-bar");

// add an on-click event to each project-bar
for (let item of projects) {
    item.addEventListener("click", collapsibleClicked);
}

function collapsibleClicked() {
    // this.classList.toggle("active"); // TODO idk what this does but i dont want it
    let content = this.nextElementSibling;

    // checks if the content is collapsed or not
    if (content.style.maxHeight) {
        // closes
        content.style.maxHeight = null;
        this.querySelector("img").style.transform = "rotate(180deg)";
        this.style.borderBottom = "0px";
    } else {
        // opens
        content.style.maxHeight = content.scrollHeight + "px";
        this.querySelector("img").style.transform = "rotate(-90deg)";
        this.style.borderBottom = "3px solid black";
    }
}