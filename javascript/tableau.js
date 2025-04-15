// Sélection des templates
const listTemplate = document.querySelector("#list-template");
const cardTemplate = document.querySelector("#card-template");

// Sélection du conteneur principal
const board = document.querySelector("#board");

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
    const cardClone = cardTemplate.content.cloneNode(true);
    cardsContainer.appendChild(cardClone);
}

// Ajouter une première liste par défaut
addList();

// Écouter le clic sur le bouton pour ajouter une liste
addListButton.addEventListener("click", addList);
