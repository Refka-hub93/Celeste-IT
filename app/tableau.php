<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>page des fonctionnalités</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">

    <link rel="stylesheet" href="css/scripts.css">


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <script src="javascript/test.js" defer></script>
</head>

<body>

    <header>

        <div id="logonav">
            <a href="index.html"><img src="./images/logo final.png" alt="logo celest-it"></a>

             <!-- Liste classique visible en écran large -->
             <nav class="navbar navbar-light">
                <div class="container-fluid">
                    <ul class="nav d-none d-lg-flex">
                        <li class="nav-item"><a class="nav-link" href="index.php">Accueil</a></li>
                        <li class="nav-item"><a class="nav-link" href="fonctionnalite.php">Fonctionnalités</a></li>
                        <li class="nav-item"><a class="nav-link" href="contact.php">Contact</a></li>
                        <li class="nav-item"><a class="nav-link" href="connexion.php">Connexion</a></li>
                        <li class="nav-item"><a class="nav-link" href="nouveaucompte.php">Créer un compte</a></li>
                    </ul>

                    <!-- Bouton burger uniquement en mobile -->
                    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarMobile" aria-controls="navbarMobile" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <!-- Menu burger mobile -->
                    <div class="collapse navbar-collapse d-lg-none" id="navbarMobile">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link" href="index.php">Accueil</a></li>
                            <li class="nav-item"><a class="nav-link" href="fonctionnalite.php">Fonctionnalités</a></li>
                            <li class="nav-item"><a class="nav-link" href="contact.php">Contact</a></li>
                            <li class="nav-item"><a class="nav-link" href="connexion.php">Connexion</a></li>
                            <li class="nav-item"><a class="nav-link" href="nouveaucompte.php">Créer un compte</a></li>
                        </ul>


                    </div>
                </div>
            </nav>


          

        </div>

    </header>

    <main class="board" id="board">
        <div class="text-center mb-4">
            <button id="add-list-button" class="btn btn-primary">Ajouter une liste</button>
            <button class="remove-list-button">Supprimer cette liste</button>
            <div class="cards"></div>
        </div>
        <div class="lists-container" id="lists-container"></div>
    </main>

    <template id="list-template">
        <section class="list">
            <div class="list-header">
                <input type="text" class="list-title form-control" placeholder="Titre de la liste">
                <button class="add-card-button btn btn-secondary">Ajouter une carte</button>

            </div>
            <ul class="cards text-center"></ul>
        </section>
    </template>

    <template id="card-template">
        <li class="card">
            <button type="button" class="card-title text-center btn btn-light ">Nouvelle Carte</button>
            <button class="remove-card-button">Supprimer cette carte</button>

        </li>
    </template>

    <div id="modal" class="modal hidden">
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <form id="card-details-form">
                <label for="card-title">Titre :</label>
                <input type="text" id="card-title" class="form-control" placeholder="Titre de la carte">
                <label for="card-description">Description :</label>
                <textarea id="card-description" class="form-control" rows="4" placeholder="Ajoutez une description"></textarea>
                <label for="card-comments">Commentaires :</label>
                <textarea id="card-comments" class="form-control" rows="4" placeholder="Ajoutez des commentaires"></textarea>
                <ul id="comments-list" class="list-group mt-2"></ul>
                <button type="submit" class="btn btn-primary mt-2">Enregistrer</button>
            </form>
        </div>
    </div>

    <footer>
        <ul>
            <li>
                Confidentialité
            </li>
            <li>Conditions légales</li>
            <li>CGV</li>
            <li>Contact</li>
        </ul>
        <p id="copy"> © 2025 Celeste-It - Tous droits résevés</p>
    </footer>
</body>

</html>