(() => {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
              const email = document.getElementById('emailLabel')
              const password = document.getElementById('passwordLabel')
              const errorCode = '<p class="formError">- Identifiant ou mot de passe invalide.</p>'

              email.style.color = 'rgb(243, 134, 136)'
              email.innerHTML = 'E-mail ' + errorCode
              password.style.color = 'rgb(243, 134, 136)'
              password.innerHTML = 'Mot de passe ' + errorCode

              event.preventDefault()
              event.stopPropagation()
              
            }
            
            console.log("form valid")
            email.attributeStyleMap.delete('color')

            form.classList.add('was-validated')
          }, false)
        })
    })()