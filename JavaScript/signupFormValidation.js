(() => {
    'use strict'
  
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
                // date.style.color = 'rgb(243, 134, 136)'
                date.classlist.add("formError1")
                date.innerHTML = 'Date de naissance <p class="formError2">- Butcord est interdit aux moins de 13 ans.</p>'
              }
            }
          }

          if (userDate == "Invalid Date") {
            date.style.color = 'rgb(243, 134, 136)'
            // date.classlist.add("formError1")
            date.innerHTML = 'Date de naissance <p class="formError2">- Tous les champs ne sont pas remplis.</p>'
          }

          email.style.color = 'rgb(243, 134, 136)'
          // email.classlist.add("formError1")
          email.innerHTML = 'E-mail <p class="formError2">- Adresse e-mail mal formée</p>'
          username.style.color = 'rgb(243, 134, 136)'
          // username.classlist.add("formError1")
          username.innerHTML = 'Nom d\'utilisateur <p class="formError2">- Doit comporter de 2 à 32 caractères</p>'
          password.style.color = 'rgb(243, 134, 136)'
          // password.classList.add("formError1")
          password.innerHTML = 'Mot de passe <p class="formError2">- Doit comporter au moins 8 caractères et contenir les trois types de caractères suivants : majuscules, minuscules et chiffres</p>'

          event.preventDefault()
          
        }
        
        if (form.checkValidity()) {
          date.innerHTML = "Date"
          email.innerHTML = "E-mail"
          username.innerHTML = "Nom d'utilisateur"
          password.innerHTML = "Mot de passe"

          form.classList.add('was-validated')
        }
        
      }, false)
    })
})()