// // Compteurs pour générer des identifiants uniques
// let cardIdCounter = 1;
// let listIdCounter = 1;

// // Sélection des templates et containers
// const listTemplate = document.querySelector("#list-template");
// const cardTemplate = document.querySelector("#card-template");
// const board = document.querySelector("#board");
// const listsContainer = document.querySelector("#lists-container");
// const modal = document.querySelector("#modal");
// const closeButton = document.querySelector(".close-button");
// const cardDetailsForm = document.querySelector("#card-details-form");
// const addListButton = document.querySelector("#add-list-button");

// // Chargement des données depuis le localStorage
// function loadBoardData() {
//     const savedCards = localStorage.getItem("cards");
//     return savedCards ? JSON.parse(savedCards) : {};
// }

// function loadListsData() {
//     const savedLists = localStorage.getItem("lists");
//     return savedLists ? JSON.parse(savedLists) : [];
// }

// // Données des cartes et listes
// const cardData = loadBoardData();
// const listsData = loadListsData();

// // Récupérer les derniers compteurs d'ID
// if (localStorage.getItem("lastCardId")) {
//     cardIdCounter = parseInt(localStorage.getItem("lastCardId")) + 1;
// }

// if (localStorage.getItem("lastListId")) {
//     listIdCounter = parseInt(localStorage.getItem("lastListId")) + 1;
// }

// // Fonction pour sauvegarder l'état du board
// function saveBoard() {
//     localStorage.setItem("cards", JSON.stringify(cardData));
//     localStorage.setItem("lists", JSON.stringify(listsData));
//     localStorage.setItem("lastCardId", cardIdCounter - 1);
//     localStorage.setItem("lastListId", listIdCounter - 1);
// }

// // Fonction pour ajouter une liste
// function addList(listTitle = "Nouvelle Liste") {
//     const listId = `list-${listIdCounter++}`;
//     const listClone = listTemplate.content.cloneNode(true);
//     const list = listClone.querySelector(".list");
//     const listTitleInput = listClone.querySelector(".list-title");
//     const addCardButton = listClone.querySelector(".add-card-button");
//     const cardsContainer = listClone.querySelector(".cards");
    
//     // Configurer l'ID de la liste
//     list.setAttribute("data-id", listId);
    
//     // Configurer le titre de la liste
//     listTitleInput.value = listTitle;
    
//     // Effacer le texte par défaut lorsqu'on clique sur l'input
//     listTitleInput.addEventListener("focus", function() {
//         if (this.value === "Nouvelle Liste") {
//             this.value = "";
//         }
//     });
    
//     // Restaurer le texte par défaut si vide à la sortie
//     listTitleInput.addEventListener("blur", function() {
//         if (this.value.trim() === "") {
//             this.value = "Nouvelle Liste";
//         }
//     });
    
//     // Gérer la modification du titre
//     listTitleInput.addEventListener("change", function() {
//         const newTitle = this.value.trim() || "Nouvelle Liste";
        
//         // Mettre à jour les données
//         const listIndex = listsData.findIndex(l => l.id === listId);
//         if (listIndex !== -1) {
//             listsData[listIndex].title = newTitle;
//             saveBoard();
//         }
//     });

//     // Ajouter un événement pour créer une nouvelle carte dans cette liste
//     addCardButton.addEventListener("click", () => addCard(cardsContainer, listId));

//     // Ajouter la liste au conteneur
//     if (listsContainer) {
//         listsContainer.appendChild(listClone);
//     } else {
//         board.appendChild(listClone);
//     }
    
//     // Ajouter à notre structure de données
//     listsData.push({
//         id: listId,
//         title: listTitle,
//         cards: []
//     });
    
//     saveBoard();
//     return listId;
// }

// // Fonction pour ajouter une carte dans une liste donnée
// function addCard(cardsContainer, listId, cardTitle = "Cliquez pour modifier") {
//     const cardClone = cardTemplate.content.cloneNode(true);
//     const cardElement = cardClone.querySelector(".card");
//     const cardTitleButton = cardClone.querySelector(".card-title");
    
//     // Configurer le titre du bouton
//     cardTitleButton.textContent = cardTitle;

//     // Assigner un identifiant unique à chaque carte
//     const cardId = `card-${cardIdCounter++}`;
//     cardElement.setAttribute("data-id", cardId);

//     // Initialiser les données de la carte
//     cardData[cardId] = {
//         title: cardTitle,
//         description: "",
//         comments: [],
//         listId: listId
//     };

//     // Ajouter un événement pour ouvrir la fenêtre modale au clic sur la carte
//     cardTitleButton.addEventListener("click", (e) => {
//         e.preventDefault();
//         openModal(cardId);
//     });

//     // Ajouter la carte au conteneur
//     cardsContainer.appendChild(cardElement);
    
//     // Ajouter l'ID de la carte à la liste correspondante
//     const listIndex = listsData.findIndex(list => list.id === listId);
//     if (listIndex !== -1) {
//         if (!listsData[listIndex].cards) {
//             listsData[listIndex].cards = [];
//         }
//         listsData[listIndex].cards.push(cardId);
//     }
    
//     saveBoard();
//     return cardId;
// }

// // Fonction pour ouvrir la fenêtre modale
// function openModal(cardId) {
//     // Charger les données de la carte
//     const card = cardData[cardId];
//     const titleInput = document.querySelector("#card-title");
//     const descriptionInput = document.querySelector("#card-description");
//     const commentsInput = document.querySelector("#card-comments");

//     // Remplir les champs du formulaire avec les données
//     titleInput.value = card.title;
//     descriptionInput.value = card.description || "";
//     commentsInput.value = ""; // Champ des commentaires vide au début

//     // Effacer le texte par défaut lorsqu'on clique sur l'input du titre
//     titleInput.addEventListener("focus", function() {
//         if (this.value === "Cliquez pour modifier") {
//             this.value = "";
//         }
//     });

//     // Sauvegarder l'identifiant de la carte en cours
//     modal.dataset.cardId = cardId;

//     // Afficher la fenêtre modale
//     modal.classList.remove("hidden");
//     modal.classList.add("visible");
//     modal.style.display = "flex";

//     // Afficher les commentaires existants
//     updateCommentsList(cardId);
// }

// // Fonction pour mettre à jour le titre d'une carte
// function updateCardTitle(cardId, newTitle) {
//     if (cardData[cardId]) {
//         cardData[cardId].title = newTitle;
        
//         // Mettre à jour l'affichage
//         const cardElement = document.querySelector(`[data-id="${cardId}"]`);
//         if (cardElement) {
//             const titleButton = cardElement.querySelector(".card-title");
//             if (titleButton) {
//                 titleButton.textContent = newTitle;
//             }
//         }
        
//         saveBoard();
//     }
// }

// // Fonction pour ajouter un commentaire
// function addComment(cardId, commentText) {
//     if (!cardData[cardId]) {
//         return;
//     }

//     // Ajouter le commentaire au tableau
//     if (!cardData[cardId].comments) {
//         cardData[cardId].comments = [];
//     }
    
//     cardData[cardId].comments.push(commentText);
//     saveBoard();

//     // Réactualiser la liste des commentaires dans la modale
//     updateCommentsList(cardId);
// }

// // Fonction pour mettre à jour la liste des commentaires dans la modale
// function updateCommentsList(cardId) {
//     const commentsList = document.querySelector("#comments-list");
//     commentsList.innerHTML = ""; // Vider la liste

//     // Afficher les commentaires
//     const comments = cardData[cardId] && cardData[cardId].comments ? cardData[cardId].comments : [];
//     comments.forEach(comment => {
//         const li = document.createElement("li");
//         li.classList.add("list-group-item");
//         li.textContent = comment;
//         commentsList.appendChild(li);
//     });
// }

// // Fonction pour fermer la fenêtre modale
// function closeModal() {
//     const cardId = modal.dataset.cardId;
//     const titleInput = document.querySelector("#card-title");
//     const descriptionInput = document.querySelector("#card-description");
    
//     // Mettre à jour les données avant de fermer
//     if (cardId && cardData[cardId]) {
//         cardData[cardId].title = titleInput.value;
//         cardData[cardId].description = descriptionInput.value;
        
//         // Mettre à jour l'affichage du titre sur la carte
//         updateCardTitle(cardId, titleInput.value);
//     }
    
//     modal.classList.remove("visible");
//     modal.classList.add("hidden");
//     modal.style.display = "none";
//     saveBoard();
// }

// // Initialisation
// document.addEventListener("DOMContentLoaded", () => {
//     // Écouter le bouton d'envoi du formulaire pour les commentaires
//     cardDetailsForm.addEventListener("submit", function(e) {
//         e.preventDefault();
        
//         const cardId = modal.dataset.cardId;
//         const commentText = document.querySelector("#card-comments").value;

//         if (commentText.trim() !== "") {
//             // Ajouter le commentaire
//             addComment(cardId, commentText);
            
//             // Réinitialiser le champ des commentaires
//             document.querySelector("#card-comments").value = "";
//         }
//     });
    
//     // Si des listes existent, les restaurer
//     if (listsData && listsData.length > 0) {
//         restoreBoard();
//     } else {
//         // Ajouter une première liste par défaut
//         addList();
//     }
    
//     // Écouter le clic sur le bouton pour ajouter une liste
//     if (addListButton) {
//         addListButton.addEventListener("click", () => addList());
//     }
    
//     // Écouter le clic pour fermer la modale
//     if (closeButton) {
//         closeButton.addEventListener("click", closeModal);
//     }
    
//     // Fermer la modale en cliquant en dehors
//     if (modal) {
//         modal.addEventListener("click", (e) => {
//             if (e.target === modal) {
//                 closeModal();
//             }
//         });
//     }
// });

// // Fonction pour restaurer le board depuis les données sauvegardées
// function restoreBoard() {
//     if (!listsData || listsData.length === 0) {
//         addList();
//         return;
//     }

//     // Pour chaque liste dans les données
//     listsData.forEach(listData => {
//         const listId = addList(listData.title);
//         const listElement = document.querySelector(`[data-id="${listId}"]`);
//         if (!listElement) return;
        
//         const cardsContainer = listElement.querySelector(".cards");
        
//         // Pour chaque carte dans la liste
//         if (listData.cards && listData.cards.length > 0) {
//             listData.cards.forEach(cardId => {
//                 if (cardData[cardId]) {
//                     addCard(cardsContainer, listId, cardData[cardId].title);
//                 }
//             });
//         }
//     });
// }





// Compteurs pour générer des identifiants uniques
let cardIdCounter = 1;
let listIdCounter = 1;

// Sélection des templates et containers
const listTemplate = document.querySelector("#list-template");
const cardTemplate = document.querySelector("#card-template");
const board = document.querySelector("#board");
const listsContainer = document.querySelector("#lists-container");
const modal = document.querySelector("#modal");
const closeButton = document.querySelector(".close-button");
const cardDetailsForm = document.querySelector("#card-details-form");
const addListButton = document.querySelector("#add-list-button");

// Chargement des données depuis le localStorage
function loadBoardData() {
    const savedCards = localStorage.getItem("cards");
    return savedCards ? JSON.parse(savedCards) : {};
}

function loadListsData() {
    const savedLists = localStorage.getItem("lists");
    return savedLists ? JSON.parse(savedLists) : [];
}

// Données des cartes et listes
const cardData = loadBoardData();
const listsData = loadListsData();

// Récupérer les derniers compteurs d'ID
if (localStorage.getItem("lastCardId")) {
    cardIdCounter = parseInt(localStorage.getItem("lastCardId")) + 1;
}

if (localStorage.getItem("lastListId")) {
    listIdCounter = parseInt(localStorage.getItem("lastListId")) + 1;
}

// Fonction pour sauvegarder l'état du board
function saveBoard() {
    localStorage.setItem("cards", JSON.stringify(cardData));
    localStorage.setItem("lists", JSON.stringify(listsData));
    localStorage.setItem("lastCardId", cardIdCounter - 1);
    localStorage.setItem("lastListId", listIdCounter - 1);
}

// Fonction pour ajouter une liste
function addList(listTitle = "Nouvelle Liste") {
    const listId = `list-${listIdCounter++}`;
    const listClone = listTemplate.content.cloneNode(true);
    const list = listClone.querySelector(".list");
    const listTitleInput = listClone.querySelector(".list-title");
    const addCardButton = listClone.querySelector(".add-card-button");
    const cardsContainer = listClone.querySelector(".cards");

    // Bouton pour supprimer la liste
    const removeListButton = document.createElement('button');
    removeListButton.textContent = "Supprimer cette liste";
    removeListButton.classList.add('remove-list-button', 'btn', 'btn-danger');
    
    // Ajouter un événement pour la suppression de la liste
    removeListButton.addEventListener('click', () => removeList(listId));

    // Configurer l'ID de la liste
    list.setAttribute("data-id", listId);
    
    // Configurer le titre de la liste
    listTitleInput.value = listTitle;

    // Ajouter un événement pour ajouter une carte
    addCardButton.addEventListener("click", () => addCard(cardsContainer, listId));

    // Ajouter le bouton de suppression de liste au header de la liste
    const listHeader = list.querySelector('.list-header');
    listHeader.appendChild(removeListButton);

    // Ajouter la liste au conteneur des listes
    if (listsContainer) {
        listsContainer.appendChild(listClone);
    } else {
        board.appendChild(listClone);
    }
    
    // Ajouter la liste aux données
    listsData.push({
        id: listId,
        title: listTitle,
        cards: []
    });
    
    saveBoard();
    return listId;
}

// Fonction pour supprimer une liste
function removeList(listId) {
    // Retirer la liste du DOM
    const listElement = document.querySelector(`[data-id="${listId}"]`);
    if (listElement) {
        listElement.remove();
    }

    // Supprimer la liste des données
    const listIndex = listsData.findIndex(list => list.id === listId);
    if (listIndex !== -1) {
        // Supprimer les cartes associées à la liste
        const listCards = listsData[listIndex].cards;
        listCards.forEach(cardId => delete cardData[cardId]);
        
        // Supprimer la liste elle-même
        listsData.splice(listIndex, 1);
    }

    // Sauvegarder l'état du board
    saveBoard();
}

// Fonction pour ajouter une carte dans une liste donnée
function addCard(cardsContainer, listId, cardTitle = "Cliquez pour modifier") {
    const cardClone = cardTemplate.content.cloneNode(true);
    const cardElement = cardClone.querySelector(".card");
    const cardTitleButton = cardClone.querySelector(".card-title");

    // Configurer le titre du bouton
    cardTitleButton.textContent = cardTitle;

    // Assigner un identifiant unique à chaque carte
    const cardId = `card-${cardIdCounter++}`;
    cardElement.setAttribute("data-id", cardId);

    // Initialiser les données de la carte
    cardData[cardId] = {
        title: cardTitle,
        description: "",
        comments: [],
        listId: listId
    };

    // Ajouter un événement pour ouvrir la fenêtre modale au clic sur la carte
    cardTitleButton.addEventListener("click", (e) => {
        e.preventDefault();
        openModal(cardId);
    });

    // Ajouter la carte au conteneur
    cardsContainer.appendChild(cardElement);
    
    // Ajouter l'ID de la carte à la liste correspondante
    const listIndex = listsData.findIndex(list => list.id === listId);
    if (listIndex !== -1) {
        if (!listsData[listIndex].cards) {
            listsData[listIndex].cards = [];
        }
        listsData[listIndex].cards.push(cardId);
    }
    
    saveBoard();
    return cardId;
}

// Fonction pour ouvrir la fenêtre modale
function openModal(cardId) {
    // Charger les données de la carte
    const card = cardData[cardId];
    const titleInput = document.querySelector("#card-title");
    const descriptionInput = document.querySelector("#card-description");
    const commentsInput = document.querySelector("#card-comments");

    // Remplir les champs du formulaire avec les données
    titleInput.value = card.title;
    descriptionInput.value = card.description || "";
    commentsInput.value = ""; // Champ des commentaires vide au début

    // Effacer le texte par défaut lorsqu'on clique sur l'input du titre
    titleInput.addEventListener("focus", function() {
        if (this.value === "Cliquez pour modifier") {
            this.value = "";
        }
    });

    // Sauvegarder l'identifiant de la carte en cours
    modal.dataset.cardId = cardId;

    // Afficher la fenêtre modale
    modal.classList.remove("hidden");
    modal.classList.add("visible");
    modal.style.display = "flex";

    // Afficher les commentaires existants
    updateCommentsList(cardId);
}

// Fonction pour mettre à jour le titre d'une carte
function updateCardTitle(cardId, newTitle) {
    if (cardData[cardId]) {
        cardData[cardId].title = newTitle;
        
        // Mettre à jour l'affichage
        const cardElement = document.querySelector(`[data-id="${cardId}"]`);
        if (cardElement) {
            const titleButton = cardElement.querySelector(".card-title");
            if (titleButton) {
                titleButton.textContent = newTitle;
            }
        }
        
        saveBoard();
    }
}

// Fonction pour ajouter un commentaire
function addComment(cardId, commentText) {
    if (!cardData[cardId]) {
        return;
    }

    // Ajouter le commentaire au tableau
    if (!cardData[cardId].comments) {
        cardData[cardId].comments = [];
    }
    
    cardData[cardId].comments.push(commentText);
    saveBoard();

    // Réactualiser la liste des commentaires dans la modale
    updateCommentsList(cardId);
}

// Fonction pour mettre à jour la liste des commentaires dans la modale
function updateCommentsList(cardId) {
    const commentsList = document.querySelector("#comments-list");
    commentsList.innerHTML = ""; // Vider la liste

    // Afficher les commentaires
    const comments = cardData[cardId] && cardData[cardId].comments ? cardData[cardId].comments : [];
    comments.forEach(comment => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = comment;
        commentsList.appendChild(li);
    });
}

// Fonction pour fermer la fenêtre modale
function closeModal() {
    const cardId = modal.dataset.cardId;
    const titleInput = document.querySelector("#card-title");
    const descriptionInput = document.querySelector("#card-description");
    
    // Mettre à jour les données avant de fermer
    if (cardId && cardData[cardId]) {
        cardData[cardId].title = titleInput.value;
        cardData[cardId].description = descriptionInput.value;
        
        // Mettre à jour l'affichage du titre sur la carte
        updateCardTitle(cardId, titleInput.value);
    }
    
    modal.classList.remove("visible");
    modal.classList.add("hidden");
    modal.style.display = "none";
    saveBoard();
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
    // Écouter le bouton d'envoi du formulaire pour les commentaires
    cardDetailsForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const cardId = modal.dataset.cardId;
        const commentText = document.querySelector("#card-comments").value;

        if (commentText.trim() !== "") {
            // Ajouter le commentaire
            addComment(cardId, commentText);
            
            // Réinitialiser le champ des commentaires
            document.querySelector("#card-comments").value = "";
        }
    });
    
    // Si des listes existent, les restaurer
    if (listsData && listsData.length > 0) {
        restoreBoard();
    } else {
        // Ajouter une première liste par défaut
        addList();
    }
    
    // Écouter le clic sur le bouton pour ajouter une liste
    if (addListButton) {
        addListButton.addEventListener("click", () => addList());
    }
    
    // Écouter le clic pour fermer la modale
    if (closeButton) {
        closeButton.addEventListener("click", closeModal);
    }
    
    // Fermer la modale en cliquant en dehors
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});

// Fonction pour restaurer le tableau depuis les données sauvegardées
function restoreBoard() {
    if (!listsData || listsData.length === 0) {
        addList();
        return;
    }

    // Pour chaque liste dans les données
    listsData.forEach(listData => {
        const listId = addList(listData.title);
        const listElement = document.querySelector(`[data-id="${listId}"]`);
        if (!listElement) return;
        
        const cardsContainer = listElement.querySelector(".cards");
        
        // Pour chaque carte dans la liste
        if (listData.cards && listData.cards.length > 0) {
            listData.cards.forEach(cardId => {
                if (cardData[cardId]) {
                    addCard(cardsContainer, listId, cardData[cardId].title);
                }
            });
        }
    });
}
