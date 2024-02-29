let button = document.getElementById("button");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

window.addEventListener("load", () => {
    input1.value = localStorage.getItem("input1") || "";
    input2.value = localStorage.getItem("input2") || "";
    input3.value = localStorage.getItem("input3") || "";
});

function saveInput() {
    localStorage.setItem("input1", input1.value);
    localStorage.setItem("input2", input2.value);
    localStorage.setItem("input3", input3.value);
}

input1.addEventListener("input", saveInput);
input2.addEventListener("input", saveInput);
input3.addEventListener("input", saveInput);

button.addEventListener("click", () => {
    let errors = [error1, error2, error3];
    let inputs = [input1, input2, input3];
    
    errors.forEach((error, index) => {
        if(inputs[index].value === "") {
            error.textContent = "*empty field";
            error.style.color = "red";
        } else {
            error.textContent = "";
        }
    });

    if(validateForm()) {
        saveInput(); 
    }
});

function validateForm() {
    let isValid = true;
    let inputs = [input1, input2, input3];
    inputs.forEach(input => {
        if(input.value === "") {
            isValid = false;
        }
    });
    return isValid;
}
