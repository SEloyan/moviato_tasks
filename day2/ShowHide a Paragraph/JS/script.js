let button = document.getElementById("hide");
let paragraph = document.getElementById("paragraph");
let show = true;


button.addEventListener("click", function() {
    if(show) {
        button.textContent = "Show"
    } else {
        button.textContent = "Hide"
    }
    show = !show
    
    if(paragraph.style.display === "block") {
        paragraph.style.display = "none"
    } else paragraph.style.display = "block"
})