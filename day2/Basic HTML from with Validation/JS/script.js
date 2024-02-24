let button = document.getElementById("button")
let paragraph = document.getElementById("error")
let anotherParagraph = document.getElementById("anothererror")

button.addEventListener("click", function () {
    let input = document.getElementById("input").value
    let anotherInput = document.getElementById("anotherinput").value
    if (input === "") {
        input.value = paragraph.textContent = "*empty field"
        paragraph.style.color = "red"
    } else {
        input.value = paragraph.textContent = ""
    }
    if (anotherInput === "") {
        anotherInput.value = anotherParagraph.textContent = "*empty field"
        anotherParagraph.style.color = "red"
    } else {
        anotherInput = anotherParagraph.textContent = ""
    }
     
})
