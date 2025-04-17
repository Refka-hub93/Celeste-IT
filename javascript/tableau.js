let cardIdCounter = 1; // Compteur pour générer des identifiants uniques

// Sélection des templates
const listTemplate = document.querySelector("#list-template");
const cardTemplate = document.querySelector("#card-template");

// Sélection du conteneur principal
const board = document.querySelector("#board");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector(".modal-content");
const closeButton = document.querySelector(".close-button");
const cardDetailsForm = document.querySelector("#card-details-form");

// Données des cartes (simule une base de données locale)
const cardData = JSON.parse(localStorage.getItem("cards")) || {};

// Bouton pour ajouter une nouvelle liste
const addListButton = document.querySelector("#add-list-button");

// Fonction pour ajouter une liste vide
function addList() {
    const listClone = listTemplate.content.cloneNode(true);
    const addCardButton = listClone.querySelector(".add-card-button");
    const cardsContainer = listClone.querySelector(".cards");

    // Ajouter un événement pour créer une nouvelle carte dans cette liste
    addCardButton.addEventListener("click", () => addCard(cardsContainer));

    // Ajouter la liste au tableau
    board.appendChild(listClone);
}

// Fonction pour ajouter une carte vide dans une liste donnée
function addCard(cardsContainer) {
    const cardClone = cardTemplate.content.cloneNode(true); // Cloner le template
    const cardElement = cardClone.querySelector(".card"); // Sélectionner l'élément de la carte

    // Assigner un identifiant unique à chaque carte
    const cardId = `card-${cardIdCounter++}`;
    cardElement.setAttribute("data-id", cardId);

    // Ajouter un événement pour ouvrir la fenêtre modale au clic sur la carte
    cardElement.addEventListener("click", () => openModal(cardId));

    // Ajouter la carte au conteneur
    cardsContainer.appendChild(cardElement);
}

// Fonction pour ouvrir la fenêtre modale
function openModal(cardId) {
    // Charger les données de la carte si elles existent
    const card = cardData[cardId] || {};
    const titleInput = document.querySelector("#card-title");
    const descriptionInput = document.querySelector("#card-description");
    const commentsInput = document.querySelector("#card-comments");

    // Remplir les champs du formulaire avec les données
    titleInput.value = card.title || "";
    descriptionInput.value = card.description || "";
    commentsInput.value = ""; // Champ des commentaires vide au début

    // Sauvegarder l'identifiant de la carte en cours
    modal.dataset.cardId = cardId;

    // Afficher la fenêtre modale
    modal.classList.remove("hidden");
    modal.classList.add("visible");

    // Afficher les commentaires existants
    updateCommentsList(cardId);
}

// Fonction pour ajouter un commentaire
function addComment(cardId, commentText) {
    if (!cardData[cardId]) {
        cardData[cardId] = { comments: [] }; // Initialiser si pas encore existant
    }

    // Ajouter le commentaire au tableau
    cardData[cardId].comments.push(commentText);
    localStorage.setItem("cards", JSON.stringify(cardData));

    // Réactualiser la liste des commentaires dans la modale
    updateCommentsList(cardId);
}

// Fonction pour mettre à jour la liste des commentaires dans la modale
function updateCommentsList(cardId) {
    const commentsList = document.querySelector("#comments-list");
    commentsList.innerHTML = ""; // Vider la liste avant de la remplir à nouveau

    // Vérifier si des commentaires existent pour la carte
    const comments = cardData[cardId] ? cardData[cardId].comments : [];
    comments.forEach((comment, index) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = comment;
        commentsList.appendChild(li);
    });
}

// Fonction pour fermer la fenêtre modale
function closeModal() {
    modal.classList.remove("visible");
    modal.classList.add("hidden");
}

// Événement de soumission du formulaire pour ajouter un commentaire
cardDetailsForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const cardId = modal.dataset.cardId;
    const commentText = document.querySelector("#card-comments").value;

    if (commentText.trim() !== "") {
        // Ajouter le commentaire sans fermer la fenêtre
        addComment(cardId, commentText);

        // Réinitialiser le champ des commentaires
        document.querySelector("#card-comments").value = "";
    }
});

// Ajouter une première liste par défaut
addList();

// Écouter le clic sur le bouton pour ajouter une liste
addListButton.addEventListener("click", addList);

// Écouter le clic pour fermer la modale
closeButton.addEventListener("click", closeModal);

// Fermer la modale en cliquant en dehors
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
