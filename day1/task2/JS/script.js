let button = document.getElementById("change")
let Hello = true

button.addEventListener("click", function() {
    if(Hello) {
        button.textContent = "Goodbye"
    } else {
        button.textContent = "Hello"
    }
    Hello = !Hello
})