(() => {
    'use strict'
  
    const emailInputSignup = document.getElementById("emailInputSignup")
    const usernameInput = document.getElementById("usernameInput")
    const passwordInput = document.getElementById("passwordInput")

    const url = 'http://localhost:8080/api/auth/signup';
    let headers = new Headers();

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        
        const email = document.getElementById('emailLabel')
        const username = document.getElementById('usernameLabel')
        const password = document.getElementById('passwordLabel')
        const date = document.getElementById('birthdateLabel')
        
        const dateToday = new Date()
        const userDay = document.getElementById('selectDay').options[document.getElementById('selectDay').selectedIndex].text
        const userMonth = document.getElementById('selectMonth').value
        const userYear = document.getElementById('selectYear').options[document.getElementById('selectYear').selectedIndex].text
        const userDate = new Date(userYear, userMonth, userDay)
        
        if (!form.checkValidity()) {

          if ((dateToday.getFullYear() - userDate.getFullYear()) <= 13) {
            if (dateToday.getMonth() < userDate.getMonth()) {
              if (dateToday.getDate() < userDate.getDate()) {
                date.classlist.add("formError1")
                date.innerHTML = 'Date de naissance <p class="formError2">- Butcord est interdit aux moins de 13 ans.</p>'
              }
            }
          }

          if (userDate == "Invalid Date") {
            date.classList.add("formError1")
            date.innerHTML = 'Date de naissance <p class="formError2">- Tous les champs ne sont pas remplis.</p>'
          }

          email.classList.add("formError1")
          email.innerHTML = 'E-mail <p class="formError2">- Adresse e-mail mal formée</p>'
          username.classList.add("formError1")
          username.innerHTML = 'Nom d\'utilisateur <p class="formError2">- Doit comporter de 2 à 32 caractères</p>'
          password.classList.add("formError1")
          password.innerHTML = 'Mot de passe <p class="formError2">- Doit comporter au moins 8 caractères et contenir les trois types de caractères suivants : majuscules, minuscules et chiffres</p>'

          event.preventDefault()
          
        }
        
        if (form.checkValidity()) {

          date.innerHTML = "Date"
          date.classList.remove("formError1")
          email.innerHTML = "E-mail"
          email.classList.remove("formError1")
          username.innerHTML = "Nom d'utilisateur"
          username.classList.remove("formError1")
          password.innerHTML = "Mot de passe"
          password.classList.remove("formError1")

          form.classList.add('was-validated')

          const body = {
            "username": usernameInput.value,
            "email": emailInputSignup.value,
            "password": passwordInput.value
          }
          event.preventDefault();
          var xhttp = new XMLHttpRequest();

          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              console.log(this.responseText)
              // if (isJsonString(this.responseText) && JSON.parse(this.responseText).hasOwnProperty('accessToken')){
              //   const accessToken = JSON.parse(this.responseText).accessToken;
              //     document.cookie = "token=" + accessToken;
              //     document.location.href="../HTML/index.html"; 
              // }
            }
          };
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/json");

        xhttp.send(JSON.stringify(body));
        xhttp.onerror = function(error) { // ne se déclenche que si la demande n'a pas pu être faite du tout
        console.log(error);
        }
        }
        
      }, false)
    })
})()