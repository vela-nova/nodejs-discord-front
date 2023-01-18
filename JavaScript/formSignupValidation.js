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

          email.style.color = 'rgb(243, 134, 136)'
          email.innerHTML = 'E-mail <p class="formError">- Adresse e-mail mal formée</p>'
          username.style.color = 'rgb(243, 134, 136)'
          username.innerHTML = 'Nom d\'utilisateur <p class="formError">- Doit comporter de 2 à 32 caractères'
          password.style.color = 'rgb(243, 134, 136)'
          password.innerHTML = 'Mot de passe <p class="formError">- Doit comporter au moins 8 caractères et contenir trois des quatre types de caractères suivants : majuscules, minuscules, chiffres et symboles</p>'

          event.preventDefault()
          event.stopPropagation()
          
        }
  
        form.classList.add('was-validated')
      }, false)
    })
})()