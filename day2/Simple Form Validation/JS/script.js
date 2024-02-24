let button = document.getElementById("enter");

button.addEventListener("click", function() {
    let input = document.getElementById("someMail").value
    if(input === "") {
        alert("Please enter your email")
    }       
})