let button = document.getElementById("change")

button.addEventListener("click", function() {
    const hex = "0123456789ABCDEF";
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    document.body.style.backgroundColor = color
})

function changeColor(background) {
    background.style.backgroundColor = getRandomColor()
}