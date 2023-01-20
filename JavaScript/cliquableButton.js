const checkbox = document.getElementById("checkbox1")
checkbox.addEventListener("click", checkboxState)
let button = document.getElementById("signupButton")
console.log("test")

function checkboxState(){

    if (checkbox.checked){
        button.outerHTML = '<button id="signupButton" type="submit" class="btn btn-primary connectionbutton">Continuer</button>'
        button = document.getElementById("signupButton")
    }

    else{
        button.outerHTML = '<button id="signupButton" type="submit" class="btn btn-primary connectionbutton" disabled>Continuer</button>'
        button = document.getElementById("signupButton")
    }
}