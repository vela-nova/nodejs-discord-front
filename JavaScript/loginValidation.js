const button = document.getElementById("connectionButton")
const email = document.getElementById("emailInput")
const password = document.getElementById("passwordInput")
button.addEventListener("click", signin)

const url = 'http://localhost:8081/api/auth/signin';
let headers = new Headers();

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function signin(event){
    const body = {
        "username": email.value,
        "password": password.value
    }
    event.preventDefault();
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText)
        if (isJsonString(this.responseText) && JSON.parse(this.responseText).hasOwnProperty('accessToken')){
            const accessToken = JSON.parse(this.responseText).accessToken;
            console.log(accessToken)
        }
    }
    };
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");

    xhttp.send(JSON.stringify(body));
    xhttp.onerror = function(error) { // ne se déclenche que si la demande n'a pas pu être faite du tout
        console.log(error);
    };

}