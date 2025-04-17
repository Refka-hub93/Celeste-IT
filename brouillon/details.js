// Extraire l'identifiant de la carte depuis l'URL
const params = new URLSearchParams(window.location.search);
const cardId = params.get("id");

// Charger les données depuis le localStorage
const cardData = JSON.parse(localStorage.getItem("cards")) || {};

// Afficher les données si elles existent
if (cardId && cardData[cardId]) {
    document.querySelector("#card-title").value = cardData[cardId].title || "";
    document.querySelector("#card-description").value = cardData[cardId].description || "";
    document.querySelector("#card-comments").value = cardData[cardId].comments || "";
}

// Écouter l'envoi du formulaire pour sauvegarder les données
document.querySelector("#card-details-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Récupérer les données du formulaire
    const title = document.querySelector("#card-title").value;
    const description = document.querySelector("#card-description").value;
    const comments = document.querySelector("#card-comments").value;

    // Mettre à jour les données dans le localStorage
    cardData[cardId] = { title, description, comments };
    localStorage.setItem("cards", JSON.stringify(cardData));

    alert("Détails enregistrés !");
});
