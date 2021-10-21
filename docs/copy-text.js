function copy(){
    let copyText = "samhirsch.dev@gmail.com";
    navigator.clipboard.writeText(copyText);

    alert("'" + copyText + "' copied to clipboard.");
}