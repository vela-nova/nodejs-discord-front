const checkbox = document.getElementById("checkbox1")
checkbox.addEventListener("click", checkboxState)
let button = document.getElementById("signupButton")
let infobulle = document.getElementById("infobulle")
console.log("test" + infobulle.outerHTML)

function checkboxState(){

    if (checkbox.checked){
        // let buttonInformation = '<button id="signupButton" type="submit" class="btn btn-primary connectionbutton">Continuer</button>'
        // infobulle.outerHTML = '<div id="infobulle">' + buttonInformation + '</div>'
        button.outerHTML = '<button id="signupButton" type="submit" class="btn btn-primary connectionbutton">Continuer</button>'
        // document.getElementById("infobulle").hidden = true;
        button = document.getElementById("signupButton")
        // infobulle = document.getElementById("infobulle")
        console.log('true ' + infobulle.outerHTML)
    }

    else{
        // let buttonInformation = '<button id="signupButton" type="submit" class="btn btn-primary connectionbutton" disabled>Continuer</button>'
        // infobulle.outerHTML = '<div id="infobulle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Tu dois accepter nos conditions d\'utilisation pour continuer.">' + buttonInformation + '</div>'
        button.outerHTML = '<button id="signupButton" type="submit" class="btn btn-primary connectionbutton" disabled>Continuer</button>'
        button = document.getElementById("signupButton")
        // infobulle = document.getElementById("infobulle")
        console.log('false ' + infobulle.outerHTML)
    }
}