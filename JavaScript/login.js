const button = document.getElementById("formButtonSubmit")
button.addEventListener("click", getAccountInformation)

function getAccountInformation(){
    let base64 = require('base-64');

    let url = 'localhost:8080/api/auth/signin';
    let username = 'testuser';
    let password = 'test';

    let headers = new Headers();

    //headers.append('Content-Type', 'text/json');
    headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'));

    fetch(url, {method:'POST',
            headers: headers,
            //credentials: 'user:passwd'
            })
    .then(response => response.json())
    .then(json => console.log(json));
    //.done();
}