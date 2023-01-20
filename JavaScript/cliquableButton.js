const checkbox = document.getElementById("checkbox1")
checkbox.addEventListener("click", checkboxState)
let infobulle = document.getElementById("infobulle")


function checkboxState(){

    if (checkbox.checked){
        let buttonInformation = '<button id="signupButton" type="submit" class="btn btn-primary connectionbutton">Continuer</button>'
        infobulle.outerHTML = '<div id="infobulle">' + buttonInformation + '</div>'
        infobulle = document.getElementById("infobulle")
    }

    else{
        let buttonInformation = '<button id="signupButton" type="submit" class="btn btn-primary connectionbutton" disabled>Continuer</button>'
        infobulle.outerHTML = '<div id="infobulle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Tu dois accepter nos conditions d\'utilisation pour continuer.">' + buttonInformation + '</div>'
        infobulle = document.getElementById("infobulle")
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    }

}
