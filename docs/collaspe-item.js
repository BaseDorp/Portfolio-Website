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
    let content = this.nextElementSibling;

    // checks if the content is collapsed or not
    if (content.style.maxHeight) {
        // closes
        content.style.maxHeight = null;
        this.querySelector("img").style.animation = 'dropDown 0.3s reverse';
        this.style.borderBottom = "0px";
        content.style.margin = "0px";
    } else {
        // opens
        content.style.maxHeight = content.scrollHeight + "px";
        this.querySelector("img").style.animation = 'dropDown 0.3s forwards';
        this.style.borderBottom = "3px solid black";
        content.style.margin = "5px";
    }
}