let input = document.getElementById("input");
let click = document.getElementById("click");
let someParagraph = document.getElementById("someParagraph");

click.addEventListener("click", function() {
    let inputText = input.value;
    someParagraph.textContent = inputText
})