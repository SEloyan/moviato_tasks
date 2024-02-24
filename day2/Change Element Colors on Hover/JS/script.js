let header = document.getElementById("header");

let initial = header; 

header.addEventListener("mouseover", function() {
    header.style.color = "Purple";
    header.style.backgroundColor = "Gold";
    header.style.transition = "1s";
    header.style.fontSize = "45px"
})
header.addEventListener("mouseout", () => {
    header.style = initial 
})