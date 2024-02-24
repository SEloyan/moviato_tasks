let button = document.getElementById("count");
let number = document.getElementById("number");
let clickCount = 0;

button.addEventListener("click", function() {
    clickCount++;
    number.textContent = clickCount;
})
