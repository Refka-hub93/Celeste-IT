// Sélection du formulaire
const form = document.querySelector('#contactForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêcher l'envoi du formulaire par défaut

    // Récupération des champs
    const nameField = document.querySelector('#name');
    const emailField = document.querySelector('#email');
    const messageField = document.querySelector('#message');
    const rgpdField = document.querySelector('#rgpd');

    // Récupération des éléments pour afficher les erreurs
    const nameError = document.querySelector('#nameError');
    const emailError = document.querySelector('#emailError');
    const messageError = document.querySelector('#messageError');
    const rgpdError = document.querySelector('#rgpdError');

    // Réinitialiser les erreurs
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    rgpdError.textContent = '';

    let isValid = true;

    // Validation des champs
    if (nameField.value.trim() === '') {
        nameError.textContent = 'Veuillez entrer votre nom.';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailField.value.trim() || !emailRegex.test(emailField.value.trim())) {
        emailError.textContent = 'Veuillez entrer une adresse email valide.';
        isValid = false;
    }

    if (messageField.value.trim() === '') {
        messageError.textContent = 'Veuillez entrer un message.';
        isValid = false;
    }

    if (!rgpdField.checked) {
        rgpdError.textContent = 'Vous devez accepter les conditions générales.';
        isValid = false;
    }

    // Si tout est valide, on affiche un message et on réinitialise le formulaire
    if (isValid) {
        alert('Message envoyé avec succès !');
        form.reset();  // Réinitialiser le formulaire après la soumission
    }
});
