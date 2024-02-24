let button = document.getElementById("change")
let paragraph = document.getElementById("text")

button.addEventListener("click", function() {
    paragraph.textContent = "You changed the text"
})