

// formulaire création nouveau compte
const form = document.querySelector('#signupForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Formulaire soumis");

    const nom = document.querySelector('#nom').value.trim();
    const prenom = document.querySelector('#prenom').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#pass').value;
    const confirmPassword = document.querySelector('#confirm_pass').value;
    const rgpd = document.querySelector('#rgpd').checked;

    const errorElements = {
        nomError: document.querySelector('#nomError'),
        prenomError: document.querySelector('#prenomError'),
        emailError: document.querySelector('#emailError'),
        passError: document.querySelector('#passError'),
        confirmPassError: document.querySelector('#confirmPassError'),
        rgpdError: document.querySelector('#rgpdError')
    };

    // Réinitialiser les erreurs
    for (const key in errorElements) {
        errorElements[key].textContent = '';
    }

    let isValid = true;

    const setError = (element, message) => {
        element.textContent = message;
        isValid = false;
    };

    // Validation des champs
    if (!nom) setError(errorElements.nomError, 'Veuillez entrer un nom.');
    if (!prenom) setError(errorElements.prenomError, 'Veuillez entrer un prénom.');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError(errorElements.emailError, 'Veuillez entrer une adresse email valide.');
    }

    // Validation stricte du mot de passe (majuscule, minuscule, chiffre, caractère spécial, longueur >= 8)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password || !passwordRegex.test(password)) {
        setError(
            errorElements.passError,
            'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.'
        );
    }

    if (password !== confirmPassword) {
        setError(errorElements.confirmPassError, 'Les mots de passe ne correspondent pas.');
    }


    if (!rgpd) {
        setError(errorElements.rgpdError, 'Vous devez accepter les conditions générales.');
    }

    // Si tout est valide
    if (isValid) {
        alert('Formulaire soumis avec succès !');
        form.reset(); // Réinitialise le formulaire
    }
});
