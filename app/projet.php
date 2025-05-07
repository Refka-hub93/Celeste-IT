<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projet</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link rel="stylesheet" href="css/scripts.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="javascript/projet.js" defer></script>
</head>

<body>

    <header>
        <div id="logonav">
            <a href="index.php"><img src="./images/logo final.png" alt="logo celest-it"></a>

            <?php require_once 'includes/nav.php'; ?>

        </div>
    </header>

    <main class="board" id="board">
        <div class="text-center mb-4">
            <button id="add-board-button" class="btn btn-primary">Créer un tableau</button>
        </div>
        <div id="boards-container"></div>
    </main>

    <!-- Template for Board -->
    <template id="board-template">
        <section class="board-section">
            <h2>Tableau: <span class="board-title">Nouveau tableau</span></h2>
            <button class="add-list-button btn btn-success">Ajouter une liste</button>
            <div class="lists-container" id="lists-container"></div>
        </section>
    </template>

    <!-- Template for List -->
    <template id="list-template">
        <section class="list">
            <div class="list-header">
                <input type="text" class="list-title form-control" placeholder="Titre de la liste">
                <button class="add-card-button btn btn-secondary">Ajouter une carte</button>
            </div>
            <ul class="cards text-center"></ul>
        </section>
    </template>

    <!-- Template for Card -->
    <template id="card-template">
        <li class="card">
            <button type="button" class="card-title text-center btn btn-light">Nouvelle Carte</button>
        </li>
    </template>

    <footer>
        <ul>
            <li>Confidentialité</li>
            <li>Conditions légales</li>
            <li>CGV</li>
            <li>Contact</li>
        </ul>
        <p id="copy">© 2025 Celeste-It - Tous droits réservés</p>
    </footer>

</body>

</html>