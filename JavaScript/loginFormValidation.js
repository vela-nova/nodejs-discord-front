(() => {
        'use strict'

        const button = document.getElementById("connectionButton")
        const email = document.getElementById("emailInput")
        const password = document.getElementById("passwordInput")
        
        const url = 'http://localhost:8080/api/auth/login';
        let headers = new Headers();
        
        function isJsonString(str) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        }

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                
                

                if (!form.checkValidity()) {
                    const email = document.getElementById('emailLabel')
                    const password = document.getElementById('passwordLabel')
                    console.log("bonjouur")
                    
                    const errorCode = '<p class="formError2">- Identifiant ou mot de passe invalide.</p>'

                    // email.classList.add("formError1")
                    // email.innerHTML = 'E-mail ' + errorCode
                    // password.classList.add("formError1")
                    // password.innerHTML = 'Mot de passe ' + errorCode
              
                    event.preventDefault()
                }

                if (form.checkValidity()) {
                    
                    // email.classList.remove("formError1", "formError2")
                    // email.innerHTML = 'E-mail'
                    // password.classList.remove("formError1", "formError2")
                    // password.innerHTML = 'Mot de passe'

                    console.log("format login valid")
                    form.classList.add('was-validated')

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
                    }
                
            };

          }, false)
        })
    })()