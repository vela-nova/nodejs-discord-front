(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          const email = document.getElementById('emailLabel')
          const username = document.getElementById('usernameLabel')
          const password = document.getElementById('passwordLabel')
          const date = document.getElementById('birthdateLabel')
          
          const dateToday = new Date()
          const userDay = document.getElementById('selectDay').options[document.getElementById('selectDay').selectedIndex].text
          const userMonth = document.getElementById('selectMonth').value
          const userYear = document.getElementById('selectYear').options[document.getElementById('selectYear').selectedIndex].text
          const userDate = new Date(userYear, userMonth, userDay)
          
          console.log(userDate);

          if (dateToday > userDate) {
            date.style.color = 'rgb(243, 134, 136)'
            date.innerHTML = 'Date de naissance <p class="formError">- Butcord est interdit aux moins de 13 ans.</p>'
          }

          if (userDate == "Invalid Date") {
            date.style.color = 'rgb(243, 134, 136)'
            date.innerHTML = 'Date de naissance <p class="formError">- Tous les champs ne sont pas remplis.</p>'
          }

          email.style.color = 'rgb(243, 134, 136)'
          email.innerHTML = 'E-mail <p class="formError">- Adresse e-mail mal formée</p>'
          username.style.color = 'rgb(243, 134, 136)'
          username.innerHTML = 'Nom d\'utilisateur <p class="formError">- Doit comporter de 2 à 32 caractères</p>'
          password.style.color = 'rgb(243, 134, 136)'
          password.innerHTML = 'Mot de passe <p class="formError">- Doit comporter au moins 8 caractères et contenir les trois types de caractères suivants : majuscules, minuscules et chiffres</p>'

          event.preventDefault()
          event.stopPropagation()
          
        }
  
        form.classList.add('was-validated')
      }, false)
    })
})()