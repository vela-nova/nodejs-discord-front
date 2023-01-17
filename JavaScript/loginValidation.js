const button = document.getElementById("connectionButton")
button.addEventListener("click", getAccountInformation)

// let base64 = require('base-64');

// let url = 'localhost:8080/api/auth/signin';

let username = 'testuser';
let password = 'test';

let headers = new Headers();

function getAccountInformation(){
    //headers.append('Content-Type', 'text/json');
    headers.set('Authorization', 'Basic ');
    //headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'));

    fetch(url, {method:'POST',
            headers: headers,
            //credentials: 'user:passwd'
        })
    .then(console.log(response), response => response.json())
    .then(json => console.log(json))
    .catch(function(error) {
        console.log('Il y a eu un problème avec l\'opération fetch : ' + error.message);
      })
    //.done();


}
