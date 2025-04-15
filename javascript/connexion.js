// Formulaire de connexion
// Sélection du formulaire
const formu = document.querySelector('#loginForm');

formu.addEventListener('submit', (event) => {
    // Empêcher l'envoi du formulaire par défaut
    event.preventDefault();

    // Récupération des champs via querySelector
    const emailField = document.querySelector('#email');
    const passField = document.querySelector('#pass');
    const emailError = document.querySelector('#emailError');
    const passError = document.querySelector('#passError');

    // Réinitialisation des messages d'erreur
    emailError.textContent = '';
    passError.textContent = '';

    let isValid = true;

    // Validation de l'email
    if (emailField.value === '') {
        emailError.textContent = 'Veuillez entrer une adresse email.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailField.value)) {
        emailError.textContent = 'Veuillez entrer une adresse email valide.';
        isValid = false;
    }


    // Validation du mot de passe
    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()]).{6,}$/.test(passField.value)) {
        passError.textContent = 'Le mot de passe est incorrect';
        isValid = false;
    } else {
        passError.textContent = ''; // Pas d'erreur
    }

    // Envoi du formulaire si toutes les validations sont correctes
    if (isValid) {
        alert('Connexion réussie !');
        formu.reset();  // Réinitialiser le formulaire
    }
});

