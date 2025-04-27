let boardIdCounter = 1;
let listIdCounter = 1;
let cardIdCounter = 1;

const boardTemplate = document.querySelector("#board-template");
const listTemplate = document.querySelector("#list-template");
const cardTemplate = document.querySelector("#card-template");
const boardsContainer = document.querySelector("#boards-container");

// Stockage des données des tableaux et de leurs listes et cartes
let boardsData = [];

// Fonction pour créer un nouveau tableau
document.getElementById("add-board-button").addEventListener("click", () => addBoard());

// Ajouter un tableau
function addBoard() {
    const boardId = `board-${boardIdCounter++}`;
    const boardClone = boardTemplate.content.cloneNode(true);
    const boardElement = boardClone.querySelector(".board-section");
    const boardTitle = boardClone.querySelector(".board-title");

    boardTitle.textContent = `Tableau ${boardIdCounter - 1}`;
    const addListButton = boardClone.querySelector(".add-list-button");
    addListButton.addEventListener("click", () => addList(boardElement, boardId));

    boardsContainer.appendChild(boardClone);

    // Ajouter le tableau dans les données
    boardsData.push({
        id: boardId,
        lists: []
    });
}

// Ajouter une liste dans un tableau
function addList(boardElement, boardId) {
    const listId = `list-${listIdCounter++}`;
    const listClone = listTemplate.content.cloneNode(true);
    const listElement = listClone.querySelector(".list");
    const listTitleInput = listClone.querySelector(".list-title");
    const addCardButton = listClone.querySelector(".add-card-button");

    listElement.setAttribute("data-id", listId);
    listTitleInput.value = "Nouvelle liste";

    // Ajouter un événement pour ajouter une carte à la liste
    addCardButton.addEventListener("click", () => addCard(listElement.querySelector(".cards"), listId));

    // Ajouter la liste au tableau
    boardElement.querySelector("#lists-container").appendChild(listClone);

    // Ajouter la liste dans les données du tableau
    const boardIndex = boardsData.findIndex(board => board.id === boardId);
    if (boardIndex !== -1) {
        boardsData[boardIndex].lists.push({
            id: listId,
            cards: []
        });
    }
}

// Ajouter une carte dans une liste
function addCard(cardsContainer, listId) {
    const cardId = `card-${cardIdCounter++}`;
    const cardClone = cardTemplate.content.cloneNode(true);
    const cardElement = cardClone.querySelector(".card");

    cardElement.setAttribute("data-id", cardId);

    // Ajouter la carte au conteneur de cartes
    cardsContainer.appendChild(cardElement);

    // Ajouter les données de la carte dans la liste
    const boardIndex = boardsData.findIndex(board => board.lists.some(list => list.id === listId));
    if (boardIndex !== -1) {
        const listIndex = boardsData[boardIndex].lists.findIndex(list => list.id === listId);
        if (listIndex !== -1) {
            boardsData[boardIndex].lists[listIndex].cards.push(cardId);
        }
    }
}
