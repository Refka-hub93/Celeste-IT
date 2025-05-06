<?php
session_start();
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouveau compte</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">

    <link rel="stylesheet" href="css/scripts.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <script src="javascript/nouveaucompte.js" defer ></script>
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

    <main>


        <section class="formulaire container py-4">
            <form action="nouveaucompte_traitement.php" method="post" id="signupForm">
                <h2 class="text-center mb-4">📝 Créer un compte</h2>
        
                <!-- Nom -->
                <div class="mb-3">
                    <label for="nom" class="form-label">Nom :</label>
                    <input type="text" id="nom" name="nom" class="form-control" value="<?= $_SESSION['data']['nom'] ?? ''; ?>">
                    <div class="error" id="nomError"></div>
                </div>
        
                <!-- Prénom -->
                <div class="mb-3">
                    <label for="prenom" class="form-label">Prénom :</label>
                    <input type="text" id="prenom" name="prenom" class="form-control" value="<?= $_SESSION['data']['prenom'] ?? ''; ?>">
                    <div class="error" id="prenomError"></div>
                </div>
        
                <!-- Email -->
                <div class="mb-3">
                    <label for="email" class="form-label">Email :</label>
                    <input type="email" id="email" name="email" class="form-control" value="<?= $_SESSION['data']['email'] ?? ''; ?>">
                    <div class="error" id="emailError"></div>
                </div>
        
                <!-- Mot de passe -->
                <div class="mb-3">
                    <label for="pass" class="form-label">Mot de passe :</label>
                    <input type="password" id="pass" name="pass" class="form-control" required>
                    <div class="error" id="passError"></div>
                </div>
        
                <!-- Confirmer le mot de passe -->
                <div class="mb-3">
                    <label for="confirm_pass" class="form-label">Confirmer le mot de passe :</label>
                    <input type="password" id="confirm_pass" name="confirm_pass" class="form-control">
                    <div class="error" id="confirmPassError"></div>
                </div>
        
                    
                <!-- RGPD -->
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="rgpd" name="accept_terms" <?php if(isset($_SESSION['data']['rgpd']) && $_SESSION['data']['rgpd'] === 'on') echo 'checked';?>>
                    <label for="rgpd" class="form-check-label">
                        J'accepte la collecte de mes données et les
                        <a href="conditions.php">conditions générales</a>
                    </label>
                    <div class="error" id="rgpdError"></div>
                </div>
        
                <!-- Bouton -->
                <button type="submit" class="btn btn-primary">🚀 S'inscrire</button>
                <?php unset($_SESSION['data']); ?>
            </form>
        </section>
        
        

        <!-- Section Accroche -->
        
        <p class="text-center pb-5">Déjà inscrit ? <a href="connexion.php">Connectez-vous</a> pour commencer à utiliser nos outils !</p>
    
    </main>
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