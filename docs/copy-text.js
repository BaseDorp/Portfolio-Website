function copy(){
    let copyText = "samhirsch.dev@gmail.com";
    navigator.clipboard.writeText(copyText);

    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied";
}