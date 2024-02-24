let button = document.getElementById("change")
let hidden = document.getElementById("hidden")

button.addEventListener("click", function() {
    if (hidden.style.display === "none") {
        hidden.style.display = "block";
    } else {
        hidden.style.display = "none"
    }
})